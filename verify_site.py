import asyncio
from playwright.async_api import async_playwright
import os

async def verify_site():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()

        # Get absolute path to index.html
        path = os.path.abspath("index.html")
        url = f"file://{path}"

        print(f"Navigating to {url}")
        await page.goto(url)

        # 1. Verify Homepage Branding
        title = await page.title()
        print(f"Page Title: {title}")
        assert "AURA LUXE" in title

        # 2. Verify Products Loaded
        product_cards = await page.query_selector_all(".product-card")
        print(f"Found {len(product_cards)} products on homepage")
        assert len(product_cards) > 0

        # 3. Test Product Search
        search_input = page.locator("#searchInput")
        await search_input.fill("Zenith")
        await search_input.press("Enter")
        await asyncio.sleep(1)

        search_results = await page.query_selector_all("#mainProductGrid .product-card")
        print(f"Search for 'Zenith' returned {len(search_results)} results")
        assert len(search_results) > 0

        # 4. Navigate to Product Detail
        first_product = page.locator(".product-card").first
        await first_product.click()
        await asyncio.sleep(1)

        detail_title = await page.locator(".product-title").text_content()
        print(f"Navigated to product: {detail_title}")
        assert len(detail_title) > 0

        # 5. Add to Cart
        add_btn = page.locator(".add-to-cart-large")
        await add_btn.click()
        print("Clicked Add to Bag")

        # Verify Cart Drawer active
        is_cart_active = await page.locator("#cartDrawer").get_attribute("class")
        assert "active" in is_cart_active
        print("Cart Drawer is active")

        # 6. Go to Cart Page
        view_bag_btn = page.locator("text=VIEW BAG")
        await view_bag_btn.click()
        await asyncio.sleep(1)
        print("Navigated to Cart Page")

        cart_items = await page.query_selector_all(".cart-item")
        print(f"Found {len(cart_items)} items in cart page")
        assert len(cart_items) > 0

        # 7. Go to Checkout
        checkout_btn = page.locator("text=PROCEED TO CHECKOUT")
        await checkout_btn.click()
        await asyncio.sleep(1)
        print("Navigated to Checkout Page")

        assert await page.locator("text=Shipping Details").is_visible()

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_site())
