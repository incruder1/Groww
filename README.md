
## Design Choices and Implementation Challenges:

### User Interface Design:

Visual Appeal:I opted for a clean and minimalist design with a focus on readability and usability.
Typography: Selected a legible font pairing for enhanced readability across different screen sizes.
Responsive Design: Ensured responsiveness across various devices using CSS media queries and flexbox/grid layout for flexible and adaptive UI components.

### Checkout Page:
Implemented a summary section displaying the order total and a call-to-action button to proceed.
Handled empty state scenarios gracefully, providing feedback to users if the cart is empty.
Used API caching to improve performance and reduce unnecessary API calls.
Added Discount option to avail 10% discount on the “Groww” keyword.

### Payment Options Page:
Rendered payment methods dynamically from the order-details API, showcasing each method with distinct visual representations.
Integrated form validation to ensure accurate payment information according to the selected method.
Smooth transitions and animations were added to enhance user experience during method selection.

### Order Confirmation Page:

Created a clear and concise order confirmation page displaying order details, selected payment method, and randomized order status (Success/Failure/Pending).
Applied consistent styling and provided feedback messages for each order status to keep users informed.

### Challenges Faced:

API Integration: Ensuring seamless integration with the provided APIs and handling asynchronous data fetching while maintaining UI responsiveness.
Form Validation: Developing comprehensive form validation logic to handle user input errors and ensure data integrity during the checkout process.
Responsive Design: Ensuring consistent user experience across various devices and screen sizes, including mobile, tablet, and desktop views.

	Thank You:- Dev Johri 