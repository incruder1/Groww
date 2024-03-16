"use client"
import {useOrderDetails} from "@/hooks/orderItems-hooks"
import { useTheme } from "next-themes";
import { Console } from "console";

export const AddressBox=()=>{
    const orderItem=useOrderDetails();
    console.log(orderItem);
    
    return (
//     <div className="cart-page">
//     <div className="row">
//       <div className="col-md-12">
//         <h1 className="text-center bg-light p-2 mb-3">
//           {!auth?.user
//             ? "Hello Guest"
//             : `Hello  ${auth?.token && auth?.user?.name}`}
//           <p className="text-center">
//             {cart?.length
//               ? `You Have ${cart.length} items in your cart ${
//                   auth?.token ? "" : "please login to checkout !"
//                 }`
//               : " Your Cart Is Empty"}
//           </p>
//         </h1>
//       </div>
//     </div>
//     <div className="container">
//       <div className="row ">
//         <div className="col-md-6  p-0 m-0">
//           {cart?.map((p) => (
//             <div className="col card flex-row " key={p._id}>
//               <div className="col-md-3 col-sm-4">
//                 <img
//                   src={`/api/v1/product/product-photo/${p._id}`}
//                   className="card-img-top"
//                   alt={p.name}
//                 />
//               </div>
//               <div className="col-md-7 col-sm-4 cart-text">
//                 <p>{p.name}</p>
//                 <p className="pad">{p.description.substring(0, 70)}</p>
//                 <p className="pad">Price : {p.price}</p>
//               </div>
//               <div className="col-md-2 cart-remove-btn col-sm-4">
//                 <button
//                   className="btn btn-danger p-1"
//                   onClick={() => removeCartItem(p._id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="col-md-5 cart-summary ">
//           <h2>Cart Summary</h2>
//           <p>Total | Checkout | Payment</p>
//           <hr />
//           <h4>Total : {totalPrice()} </h4>
//           {auth?.user?.address ? (
//             <>
//               <div className="mb-3">
//                 <h4>Current Address</h4>
//                 <h5>{auth?.user?.address}</h5>
//                 <button
//                   className="btn btn-outline-warning"
//                   onClick={() => navigate("/dashboard/user/profile")}
//                 >
//                   Update Address
//                 </button>
//               </div>
//             </>
//           ) : (
//             <div className="mb-3">
//               {auth?.token ? (
//                 <button
//                   className="btn btn-outline-warning"
//                   onClick={() => navigate("/dashboard/user/profile")}
//                 >
//                   Update Address
//                 </button>
//               ) : (
//                 <button
//                   className="btn btn-outline-warning"
//                   onClick={() =>
//                     navigate("/login", {
//                       state: "/cart",
//                     })
//                   }
//                 >
//                   Please Login to checkout
//                 </button>
//               )}
//             </div>
//           )}
//           <div className="mt-2">
//             {!clientToken || !auth?.token || !cart?.length ? (
//               ""
//             ) : (
//               <>
//                 <DropIn
//                   options={{
//                     authorization: clientToken,
//                     paypal: {
//                       flow: "vault",
//                     },
//                   }}
//                   onInstance={(instance) => setInstance(instance)}
//                 />

//                 <button
//                   className="btn btn-primary"
//                   onClick={handlePayment}
//                   disabled={loading || !instance || !auth?.user?.address}
//                 >
//                   {loading ? "Processing ...." : "Make Payment"}
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
<div>
{/* hio */}
</div>
  );
}