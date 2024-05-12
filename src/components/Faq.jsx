

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
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  How do I borrow books from the library?
                </div>
                <div className="collapse-content">
                  <p>
                    To borrow books, you have to visit our library site and You
                    can then choose the books you like to borrow and check them.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-violet-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  How many books can I borrow at a time?
                </div>
                <div className="collapse-content">
                  <p>
                    You can borrow as much as you can. But You can not borrow
                    same book twice until return it.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-violet-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  What happens if I return books late?
                </div>
                <div className="collapse-content">
                  <p>
                    Late fees may apply for overdue items. The amount of the fee
                    depends on the type of item and the length of the overdue
                    period. It is important to return borrowed items on time to
                    avoid late fees and ensure fair access to library resources
                    for all members.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-violet-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Can I suggest a book for the library to purchase?
                </div>
                <div className="collapse-content">
                  <p>
                    Absolutely! We welcome suggestions for new books and other
                    materials to add to our collection. You can submit your
                    suggestions through our website, or you can speak with our
                    staff during your visit to the library.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-violet-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Is there a way to donate books to the library?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes, we accept book donations that meet our collection
                    development guidelines. You can drop off donations at the
                    circulation desk during our operating hours. Please note
                    that we may not be able to accept all donated items, and any
                    materials not added to our collection may be sold or
                    otherwise disposed of at our discretion.
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