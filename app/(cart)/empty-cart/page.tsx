import Confirmation from "@/component/confirmation";

const EmptyCartPage = () => {
  return (
    <Confirmation
      imagePath="/bag.svg"
      heading="Your Bag is empty!"
      subheading="Add some items to proceed to checkout."
      buttonText="Add from watchlist"
      className="h-[50vh]"
    />
  );
};
export default EmptyCartPage;
