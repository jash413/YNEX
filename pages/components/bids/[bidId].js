import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import network from "@/config";
import BidDetails from "@/shared/layout-components/forms/bid-details";

const BidDetail = () => {
  const router = useRouter();
  const { bidId } = router.query;
  const [bidDetails, setBidDetails] = useState({});

  useEffect(() => {
    if (bidId) {
      const fetchBidDetails = async () => {
        try {
          const response = await axios.get(`${network.serverUrl}api/${bidId}`);
          setBidDetails(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchBidDetails();
    }
  }, [bidId]);

  return (
    // <div>
    //   <Seo title={"Bid Details"} />
    //   <Pageheader
    //     currentpage="Bid Details"
    //     activepage="Bids"
    //     mainpage="Bid Details"
    //   />
    //   <div className="box">
    //     <div className="box-body !p-0">
    //       <div className="table-responsive">
    //         <table className="table whitespace-nowrap min-w-full">
    //           <tbody>
    //             <tr className="border-b border-defaultborder">
    //               <td>
    //                 <span className="font-semibold">Bid ID :</span>
    //               </td>
    //               <td>{bidDetails.bid_id}</td>
    //             </tr>
    //             <tr className="border-b border-defaultborder">
    //               <td>
    //                 <span className="font-semibold">Project Name :</span>
    //               </td>
    //               <td>{bidDetails.project_name}</td>
    //             </tr>
    //             <tr className="border-b border-defaultborder">
    //               <td>
    //                 <span className="font-semibold">Task Name :</span>
    //               </td>
    //               <td>{bidDetails.task_name}</td>
    //             </tr>
    //             <tr className="border-b border-defaultborder">
    //               <td>
    //                 <span className="font-semibold">Bid Status :</span>
    //               </td>
    //               <td>
    //                 <span
    //                   className={`badge bg-${statusColor(
    //                     bidDetails.bid_status
    //                   )}/10 text-${statusColor(bidDetails.bid_status)}`}
    //                 >
    //                   {bidDetails.bid_status}
    //                 </span>
    //               </td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="box">
    //     <div className="box-header justify-between">
    //       <div className="box-title">Bid Summary</div>
    //       <div className="btn-list">
    //         <button
    //           aria-label="button"
    //           type="button"
    //           className="ti-btn bg-success !py-1 !px-2 !font-medium text-white !text-[0.75rem] me-0"
    //         >
    //           <Link href={`/components/bids/editBid/${bidDetails.bid_id}`}>
    //           <i className="ri-edit-line me-1 align-middle"></i>Edit Bid
    //           </Link>
    //         </button>
    //       </div>
    //     </div>
    //     {bidDetails && (
    //       <>
    //         <div className="box-body">
    //           <div className="text-[.9375rem] font-semibold mb-2">
    //             Bid Description :
    //           </div>
    //           <p className="text-[#8c9097] dark:text-white/50 Bid-description">
    //             {bidDetails.description}
    //           </p>
    //           <div className="text-[.9375rem] font-semibold mb-2">
    //             In Scope :
    //           </div>
    //           <p className="text-[#8c9097] dark:text-white/50 Bid-description">
    //             {bidDetails.bid_inscope}
    //           </p>
    //           <div className="text-[.9375rem] font-semibold mb-2">
    //             Out Scope :
    //           </div>
    //           <p className="text-[#8c9097] dark:text-white/50 Bid-description">
    //             {bidDetails.bid_outscope}
    //           </p>
    //           <div className="text-[.9375rem] font-semibold mb-2">
    //             Price Quoted :
    //           </div>
    //           <p className="text-[#8c9097] dark:text-white/50 Bid-description">
    //             ${bidDetails.bid_amount_from_sub}
    //           </p>
    //           <div className="text-[.9375rem] font-semibold mb-2">
    //             Payment Terms :
    //           </div>
    //           <p className="text-[#8c9097] dark:text-white/50 Bid-description">
    //             {bidDetails.bid_payment_terms}
    //           </p>
    //         </div>
    //         <div className="box-footer">
    //           <div className="flex items-center justify-between gap-2 flex-wrap">
    //             <div>
    //               <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">
    //                 Subcontractor
    //               </span>
    //               <div className="flex items-center flex-wrap">
    //                 <div className="me-2 leading-none">
    //                   <span className="avatar avatar-xs avatar-rounded">
    //                     <img src="../../../assets/images/faces/15.jpg" alt="" />
    //                   </span>
    //                 </div>
    //                 <span className="block text-[.875rem] dark:text-defaulttextcolor/70 font-semibold">
    //                   {bidDetails.subcontractor_id &&
    //                     bidDetails.subcontractor_id["Name"]}
    //                 </span>
    //               </div>
    //             </div>
    //             <div>
    //               <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">
    //                 Received Date
    //               </span>
    //               <span className="block text-[.875rem] font-semibold dark:text-defaulttextcolor/70">
    //                 {bidDetails.bid_recieved_date}
    //               </span>
    //             </div>
    //             <div>
    //               <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">
    //                 Expiration Date
    //               </span>
    //               <span className="block text-[.875rem] font-semibold dark:text-defaulttextcolor/70">
    //                 {bidDetails.bid_expiration_date}
    //               </span>
    //             </div>
    //             <div className="Bid-details-progress">
    //               <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1">
    //                 Progress
    //               </span>
    //               <div className="flex items-center flex-wrap">
    //                 <div
    //                   className="progress progress-xs progress-animate flex-grow me-2"
    //                   aria-valuenow="70"
    //                   aria-valuemin="0"
    //                   aria-valuemax="100"
    //                 >
    //                   <div className="progress-bar bg-primary w-[70%]"></div>
    //                 </div>
    //                 <div className="text-[#8c9097] dark:text-white/50 text-[.6875rem]">
    //                   70%
    //                 </div>
    //               </div>
    //             </div>
    //             <div>
    //               <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">
    //                 Efforts
    //               </span>
    //               <span className="block text-[.875rem]  dark:text-defaulttextcolor/70 font-semibold">
    //                 45H : 35M : 45S
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </>
    //     )}
    //   </div>
    // </div>
    <>
      <Seo title={"Bid Details"} />
      <Pageheader
        currentpage="Bid Details"
        activepage="Bids"
        mainpage="Bid Details"
      />
      <BidDetails bidsData={bidDetails} showEditBtn={true} />
    </>
  );
};

BidDetail.layout = "Contentlayout";

export default BidDetail;
