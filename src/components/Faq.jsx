

const Faq = () => {
    return (
      <div>
        <div>
          <h1 className="text-center font-bold text-3xl md:text-5xl py-5 underline text-violet-600">
            Frequently Asked Questions: FAQ
          </h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="https://i.ibb.co/8BMpy4M/istockphoto-482954458-612x612.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="pt-10 space-y-2">
              <div className="collapse collapse-arrow bg-violet-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  Are your products handmade?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes, most of our products are handmade by skilled artisans.
                    We take pride in supporting traditional craftsmanship and
                    providing unique, high-quality items.
                  </p>
                </div>
              </div>
              
              <div className="collapse collapse-arrow bg-violet-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  How can I contact customer support?
                </div>
                <div className="collapse-content">
                  <p>
                    You can reach our customer support team via email at [email
                    address] or by filling out the contact form on our website.
                    We strive to respond to all inquiries within 24 hours.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-violet-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Do you offer workshops or classes?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes, we periodically offer workshops and classes where you
                    can learn various art and craft techniques. Stay tuned to
                    our website or subscribe to our newsletter for updates on
                    upcoming events.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-violet-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  How do I care for my handmade products?
                </div>
                <div className="collapse-content">
                  <p>
                    Care instructions vary depending on the product. Generally,
                    we recommend hand washing or spot cleaning for delicate
                    items and avoiding exposure to direct sunlight or harsh
                    chemicals. Specific care instructions will be provided with
                    your purchase.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-violet-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Do you offer gift cards?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes, we offer gift cards that can be redeemed for purchases
                    on our website. Gift cards are available in various
                    denominations and make the perfect gift for any occasion
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-violet-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  What happens if an item I want is out of stock?
                </div>
                <div className="collapse-content">
                  <p>
                    If an item you want is out of stock, you can sign up to be
                    notified when it becomes available again. Alternatively, you
                    can contact us to inquire about restocking timelines or
                    possible alternatives.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-violet-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  What is your privacy policy?
                </div>
                <div className="collapse-content">
                  <p>
                    We take your privacy seriously and are committed to
                    protecting your personal information. Please refer to our
                    privacy policy page for detailed information on how we
                    collect, use, and safeguard your data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Faq;