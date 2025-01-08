// import { Card, CardContent } from "@/components/ui/card"
// import { Check, FileText, Settings, Users } from 'lucide-react'

// export default function ISASigningProcess() {
//   return (
//     <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50 ">
//     <div className="relative w-full bg-gray-200 p-4 md:p-8 rounded-lg mx-auto max-w-5xl">
//       {/* Top Image */}
//       <div className="absolute top-0 left-10">
//         <img src="/assets/tag1.png" alt="Top Decoration" className="w-16 h-16" />
//       </div>

//       {/* Header Section */}
//       <div className="mb-8 mt-14 flex flex-col md:flex-row items-start gap-4">
//         <div className="relative">
        
           
//         </div>
//         <div>
//           <h2 className="text-black text-2xl font-bold ">End to End <span className="text-[#ff0000]" >Placement Guaranteed DevOps</span> Program Process</h2>
//           {/* <p className="text-black max-w-3xl">
//             The students need to pay after they get placed and get their first salary. They need to pay INR 10,000 to StarAgile as a career services fee which can be paid in easy EMIs.
//           </p> */}
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative">
//         {/* Connecting Lines - Visible only on large screens */}
//         <div className="hidden lg:block absolute top-1/2 left-1/4 w-1/6 h-0.5 bg-[#00FFA3] transform -translate-y-1/2" />
//         <div className="hidden lg:block absolute top-1/2 left-1/2 w-1/6 h-0.5 bg-[#00FFA3] transform -translate-x-1/2 -translate-y-1/2" />
//         <div className="hidden lg:block absolute top-1/2 right-1/4 w-1/6 h-0.5 bg-[#00FFA3] transform -translate-y-1/2" />

//         {/* Sign ISA Card */}
//         <Card className="bg-gray-200 border-none shadow-lg hover:shadow-xl transition-shadow">
//           <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
//             <div className="w-full h-36 md:h-28 relative mb-4">
//               <div className="absolute inset-0 bg-white rounded-lg p-4">
//                 <div className="border-b border-gray-200 mb-2" />
//                 <div className="border-b border-gray-200 mb-2" />
//                 <div className="border-b border-gray-200 mb-2" />
//                 <div className="absolute bottom-4 right-4 bg-[#E0FFF7] text-[#004D40] px-4 py-2 rounded-md">
//                   Sign
//                 </div>
//               </div>
//             </div>
//             <h3 className="text-black font-semibold text-sm">Apply Now & Start Your Learning Journey </h3>
//           </CardContent>
//         </Card>

//         {/* Eligibility Card */}
//         <Card className="bg-gray-200 border-none shadow-lg hover:shadow-xl transition-shadow">
//           <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
//             <div className="w-full h-36 md:h-28 relative mb-4">
//               <div className="absolute inset-0 bg-white rounded-lg p-4">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-12 h-12 bg-gray-200 rounded-full" />
//                   <div className="flex-1">
//                     <div className="h-2 bg-gray-200 rounded w-3/4 mb-2" />
//                     <div className="h-2 bg-gray-200 rounded w-1/2" />
//                   </div>
//                 </div>
//                 <div className="absolute top-2 right-2">
//                   <div className="bg-purple-100 rounded-full p-2">
//                     <Check className="w-6 h-6 text-purple-600" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <h3 className="text-black font-semibold text-sm">Build Your 20+ CapStone Industry Level Projects </h3>
            
//           </CardContent>
//         </Card>

//         {/* Payment Card */}
//         <Card className="bg-gray-200 border-none shadow-lg hover:shadow-xl transition-shadow">
//           <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
//             <div className="w-full h-36 md:h-28 relative mb-4">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="relative">
//                   <div className="w-24 md:w-32 h-16 md:h-20 bg-[#E0FFF7] rounded-lg transform rotate-[-5deg] absolute top-2 left-2" />
//                   <div className="w-24 md:w-32 h-16 md:h-20 bg-[#E0FFF7] rounded-lg transform rotate-[5deg] absolute top-0 left-0" />
//                   <div className="w-24 md:w-32 h-16 md:h-20 bg-[#E0FFF7] rounded-lg relative z-10 flex items-center justify-center">
//                     <span className="text-[#004D40] font-bold">₹</span>
//                   </div>
//                   <div className="absolute bottom-[-30px] right-[-20px] bg-purple-100 rounded-full p-3">
//                     <Settings className="w-6 h-6 text-purple-600" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <h3 className="text-black font-semibold text-sm">Business Communication, Assessments & Contribution</h3>
            
//           </CardContent>
//         </Card>

//         {/* New Fourth Card */}
//         <Card className="bg-gray-200 border-none shadow-lg hover:shadow-xl transition-shadow">
//           <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
//             <div className="w-full h-36 md:h-28 relative mb-4">
//               <div className="absolute inset-0 bg-white rounded-lg p-4 flex items-center justify-center">
//                 <div className="relative">
//                   <div className="bg-[#E0FFF7] rounded-full p-6">
//                     <Users className="w-12 h-12 text-[#004D40]" />
//                   </div>
//                   <div className="absolute bottom-[-20px] right-[-20px] bg-purple-100 rounded-full p-2">
//                     <Check className="w-6 h-6 text-purple-600" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <h3 className="text-black font-semibold text-sm">Get placed as DevOps Engineer </h3>
//             <p className="text-gray-500 text-sm">(Note : 100% refund if not hired*)
//             </p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Bottom Image */}
//     </div>
//       <div className="pt-2 h-16 w-8 ml-8 md:ml-[182px]">
//     <img src="/assets/downarrow.png" alt="Description of the image" className="h-full w-full object-contain" />
// </div>
//     </div>
//   )
// }



import { Card, CardContent } from "@/components/ui/card"
import { Check, FileText, Settings, Users } from 'lucide-react'

export default function ISASigningProcess() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
        <div className="max-w-6xl mx-auto">
      <div className="relative w-full bg-gray-200 p-4 md:p-8 rounded-lg mx-auto max-w-5xl">
        {/* Top Image */}
        <div className="absolute top-0 left-10">
          <img src="/assets/tag1.png" alt="Top Decoration" className="w-16 h-16" />
        </div>

        {/* Header Section */}
        <div className="mb-8 mt-14 flex flex-col md:flex-row items-start gap-4">
          <div className="relative"></div>
          <div>
            <h2 className="text-black text-2xl font-bold">End to End <span className="text-[#ff0000]">Placement Guaranteed DevOps</span> Program Process</h2>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 relative">
          {/* First Card */}
          <Card className="bg-gray-200 border-none shadow-lg hover:shadow-xl transition-shadow w-full sm:w-64">
            <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
              <div className="w-full h-36 md:h-28 relative md:mb-8 lg:mb-8">
                <div className="absolute inset-0  rounded-lg p-4">
                  <div className="absolute top-2 right-2 " />

                  <div className="mb">
                    <img  src="/assets/Apply Now.png" alt="image" />
                  </div>
                </div>
              </div>
              <h3 className="text-black font-semibold text-sm">Apply Now & Start Your Learning Journey</h3>
            </CardContent>
          </Card>

          {/* Arrow Image 1 */}
          <div className="hidden sm:block">
            <img src="/assets/rightarrow.png" alt="Right Arrow" className="w-8 h-8" />
          </div>

          {/* Second Card */}
          <Card className="bg-gray-200 border-none shadow-lg hover:shadow-xl transition-shadow w-full sm:w-64">
            <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
              <div className="w-full h-36 md:h-32 relative mb-4">
                <div className="absolute inset-0 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                    <div className="flex-1">
                      <div className="h-2  rounded w-3/4 mb-2" />
                      <div className="h-2 rounded w-1/2" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <div>
                      <img src="/assets/project.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-black font-semibold text-sm">Build Your 20+ CapStone Industry Level Projects</h3>
            </CardContent>
          </Card>

          {/* Arrow Image 2 */}
          <div className="hidden sm:block">
            <img src="/assets/rightarrow.png" alt="Right Arrow" className="w-8 h-8" />
          </div>

          {/* Third Card */}
          <Card className="bg-gray-200 border-none shadow-lg hover:shadow-xl transition-shadow w-full sm:w-64">
            <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
              <div className="w-full h-36 md:h-28 relative mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    
                    
                    <div>
                        <img src="/assets/Business-Communication.png" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-black font-semibold text-sm">Business Communication, Assessments & Contribution</h3>
            </CardContent>
          </Card>

          {/* Arrow Image 3 */}
          <div className="hidden sm:block">
            <img src="/assets/rightarrow.png" alt="Right Arrow" className="w-8 h-8" />
          </div>

          {/* Fourth Card */}
          <Card className="bg-gray-200 border-none shadow-lg hover:shadow-xl transition-shadow w-full sm:w-64">
            <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
              <div className="w-full h-36 md:h-28 relative mb-4">
                <div className="absolute inset-0 rounded-lg p-4 flex items-center justify-center">
                  <div className="relative">

                    <div>
                       <img src="/assets/Get-placed.png" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-black font-semibold text-sm">Get placed as DevOps Engineer</h3>
              <p className="text-gray-500 text-sm">(Note : 100% refund if not hired*)</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Arrow */}
      <div className="pt-2 h-16 w-8 ml-8 md:ml-[128px]">
        <img src="/assets/downarrow.png" alt="Description of the image" className="h-full w-full object-contain" />
      </div>
    </div>
    </div>
  )
}