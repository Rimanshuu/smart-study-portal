import svgPaths from "./svg-u2bkghccbw";

function Sidebar() {
  return (
    <div className="h-[809.877px] relative shrink-0 w-[255.988px]" data-name="Sidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[809.877px] w-[255.988px]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[32px] relative shrink-0 w-[166px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] w-[166px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[35.988px] relative rounded-[16px] shrink-0 w-[67.793px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#ff6b4a] border-[0.988px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[35.988px] items-center justify-center px-[12.988px] py-[0.988px] relative w-[67.793px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#ff6b4a] text-[14px] text-nowrap whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[10.99px] size-[15.988px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_23_13402)" id="Icon">
          <path d={svgPaths.pa95ed00} id="Vector" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_23_13402">
            <rect fill="white" height="15.9877" width="15.9877" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[35.988px] relative rounded-[16px] shrink-0 w-[84.028px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.988px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.988px] relative w-[84.028px]">
        <Icon />
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[34.97px] text-[#f5f5f7] text-[14px] text-nowrap top-[5.99px] whitespace-pre">Filters</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33076 7.99383H12.6569" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M7.99383 3.33076V12.6569" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(255,107,74,0.3),0px_4px_6px_-4px_rgba(255,107,74,0.3)] shrink-0 size-[35.988px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[35.988px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[35.988px] relative shrink-0 w-[211.79px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.991px] h-[35.988px] items-center relative w-[211.79px]">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[35.988px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <p className="bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal leading-[32px] relative shrink-0 text-[#f5f5f7] text-[24px] text-nowrap whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(245, 245, 247) 0%, rgb(245, 245, 247) 100%), linear-gradient(169.089deg, rgb(255, 107, 74) 0%, rgb(255, 142, 107) 100%)" }}>
        Study Sessions
      </p>
      <Container />
    </div>
  );
}

function StudyTracker() {
  return (
    <div className="h-[23.997px] relative shrink-0 w-[142.886px]" data-name="StudyTracker">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.997px] relative w-[142.886px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-[0.04px] text-[#f5f5f7] text-[16px] top-[-11.94px] w-[143px]">0 session(s) selected</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[10.99px] size-[15.988px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24_5005)" id="Icon">
          <path d="M5.32922 1.3323V3.99691" id="Vector" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M10.6584 1.3323V3.99691" id="Vector_2" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p18fce100} id="Vector_3" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M1.99846 6.66152H13.9892" id="Vector_4" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_24_5005">
            <rect fill="white" height="15.9877" width="15.9877" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[35.988px] left-0 opacity-50 rounded-[16px] top-0 w-[75.108px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.988px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon2 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[34.97px] text-[#f5f5f7] text-[14px] text-nowrap top-[5.99px] whitespace-pre">Sync</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[10.99px] size-[15.988px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24_5027)" id="Icon">
          <path d="M5.32922 1.3323V3.99691" id="Vector" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M10.6584 1.3323V3.99691" id="Vector_2" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p18fce100} id="Vector_3" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M1.99846 6.66152H13.9892" id="Vector_4" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p3dd43100} id="Vector_5" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p2db6ff80} id="Vector_6" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_24_5027">
            <rect fill="white" height="15.9877" width="15.9877" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[35.988px] left-[83.1px] opacity-50 rounded-[16px] top-0 w-[91.867px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.988px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon3 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[34.97px] text-[#f5f5f7] text-[14px] text-nowrap top-[5.99px] whitespace-pre">Unsync</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[10.99px] size-[15.988px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24_5022)" id="Icon">
          <path d={svgPaths.p33840100} id="Vector" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p23fe3e80} id="Vector_2" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M6.66152 7.99383H9.32613" id="Vector_3" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_24_5022">
            <rect fill="white" height="15.9877" width="15.9877" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[35.988px] left-[182.96px] opacity-50 rounded-[16px] top-0 w-[93.225px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.988px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon4 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[34.97px] text-[#f5f5f7] text-[14px] text-nowrap top-[5.99px] whitespace-pre">Archive</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[10.99px] size-[15.988px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24_5015)" id="Icon">
          <path d="M6.66152 7.32767V11.3246" id="Vector" stroke="var(--stroke-0, #FF453A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M9.32613 7.32767V11.3246" id="Vector_2" stroke="var(--stroke-0, #FF453A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.pc455940} id="Vector_3" stroke="var(--stroke-0, #FF453A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M1.99846 3.99691H13.9892" id="Vector_4" stroke="var(--stroke-0, #FF453A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p3952140} id="Vector_5" stroke="var(--stroke-0, #FF453A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_24_5015">
            <rect fill="white" height="15.9877" width="15.9877" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[35.988px] left-[284.18px] opacity-50 rounded-[16px] top-0 w-[86.944px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.988px] border-[rgba(255,69,58,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon5 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[34.97px] text-[#ff453a] text-[14px] text-nowrap top-[5.99px] whitespace-pre">Delete</p>
    </div>
  );
}

function StudyTracker1() {
  return (
    <div className="h-[35.988px] relative shrink-0 w-[371.127px]" data-name="StudyTracker">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.988px] relative w-[371.127px]">
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(255,107,74,0.1)] h-[69.938px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.988px] border-[rgba(255,107,74,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[69.938px] items-center justify-between px-[16.975px] py-[0.988px] relative w-full">
          <StudyTracker />
          <StudyTracker1 />
        </div>
      </div>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[428.364px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[7.99px] text-[#f5f5f7] text-[14px] text-nowrap top-[7.75px] whitespace-pre">Task Name</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[428.36px] top-0 w-[220.293px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[7.99px] text-[#f5f5f7] text-[14px] text-nowrap top-[7.75px] whitespace-pre">Subject</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[648.66px] top-0 w-[183.58px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[7.99px] text-[#f5f5f7] text-[14px] text-nowrap top-[7.75px] whitespace-pre">Date</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[832.24px] top-0 w-[269.259px]" data-name="TableHead">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[7.99px] text-[#f5f5f7] text-[14px] text-nowrap top-[7.75px] whitespace-pre">Spaced Repetition Progress</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[19.985px] relative shrink-0 w-[58.349px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.985px] items-start relative w-[58.349px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f5f5f7] text-[14px] text-nowrap whitespace-pre">Select All</p>
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[rgba(58,58,61,0.3)] relative rounded-[14px] shrink-0 size-[15.988px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.988px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[15.988px]" />
    </div>
  );
}

function StudyTracker2() {
  return (
    <div className="absolute content-stretch flex gap-[7.994px] h-[19.985px] items-center justify-end left-[7.99px] top-[9.75px] w-[114.429px]" data-name="StudyTracker">
      <Text />
      <PrimitiveButton />
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[1059.03px] top-[0.11px] w-[122.423px]" data-name="TableHead">
      <StudyTracker2 />
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1223.92px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.988px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1223.92px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[38.935px] left-0 top-0 w-[428.364px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[7.99px] text-[#f5f5f7] text-[14px] text-nowrap top-[7.47px] whitespace-pre">Neural Networks - Backpropagation</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[rgba(255,107,74,0.1)] h-[21.96px] left-[7.99px] rounded-[14px] top-[8.49px] w-[130.201px]" data-name="Badge">
      <div className="h-[21.96px] overflow-clip relative rounded-[inherit] w-[130.201px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[16px] left-[8.98px] text-[#f5f5f7] text-[12px] text-nowrap top-[1.98px] whitespace-pre">Artificial Intelligence</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.988px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[38.935px] left-[428.36px] top-0 w-[220.293px]" data-name="TableCell">
      <Badge />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[38.935px] left-[648.66px] top-0 w-[183.58px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[7.99px] text-[#f5f5f7] text-[14px] text-nowrap top-[7.47px] whitespace-pre">Oct 20, 2025</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute left-0 rounded-[3.31402e+07px] size-[15.988px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9bff6f] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[3.31402e+07px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute left-[21.98px] rounded-[3.31402e+07px] size-[15.988px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9bff6f] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[3.31402e+07px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute left-[43.95px] rounded-[3.31402e+07px] size-[15.988px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#86868b] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[3.31402e+07px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute left-[65.93px] rounded-[3.31402e+07px] size-[15.988px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#86868b] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[3.31402e+07px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute left-[87.9px] rounded-[3.31402e+07px] size-[15.988px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#86868b] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[3.31402e+07px]" />
    </div>
  );
}

function StudyTracker3() {
  return (
    <div className="absolute h-[15.988px] left-[7.99px] top-[11.47px] w-[253.272px]" data-name="StudyTracker">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[38.935px] left-[832.24px] top-0 w-[269.259px]" data-name="TableCell">
      <StudyTracker3 />
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="absolute bg-[rgba(58,58,61,0.3)] left-[33.53px] rounded-[14px] size-[15.988px] top-[11.11px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.988px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[38.935px] left-[1101.5px] top-0 w-[122.423px]" data-name="TableCell">
      <PrimitiveButton1 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[38.935px] left-0 top-0 w-[1223.92px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.988px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[38.935px] left-0 top-0 w-[428.364px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[7.99px] text-[#f5f5f7] text-[14px] text-nowrap top-[7.47px] whitespace-pre">Quantum Mechanics - Wave Functions</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[rgba(255,107,74,0.1)] h-[21.96px] left-[7.99px] rounded-[14px] top-[8.49px] w-[57.191px]" data-name="Badge">
      <div className="h-[21.96px] overflow-clip relative rounded-[inherit] w-[57.191px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[16px] left-[8.98px] text-[#f5f5f7] text-[12px] text-nowrap top-[1.98px] whitespace-pre">Physics</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.988px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[38.935px] left-[428.36px] top-0 w-[220.293px]" data-name="TableCell">
      <Badge1 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[38.935px] left-[648.66px] top-0 w-[183.58px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[7.99px] text-[#f5f5f7] text-[14px] text-nowrap top-[7.47px] whitespace-pre">Oct 21, 2025</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute left-0 rounded-[3.31402e+07px] size-[15.988px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9bff6f] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[3.31402e+07px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute left-[21.98px] rounded-[3.31402e+07px] size-[15.988px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9bff6f] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[3.31402e+07px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute left-[43.95px] rounded-[3.31402e+07px] size-[15.988px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9bff6f] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[3.31402e+07px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute left-[65.93px] rounded-[3.31402e+07px] size-[15.988px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#86868b] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[3.31402e+07px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute left-[87.9px] rounded-[3.31402e+07px] size-[15.988px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#86868b] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[3.31402e+07px]" />
    </div>
  );
}

function StudyTracker4() {
  return (
    <div className="absolute h-[15.988px] left-[7.99px] top-[11.47px] w-[253.272px]" data-name="StudyTracker">
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[38.935px] left-[832.24px] top-0 w-[269.259px]" data-name="TableCell">
      <StudyTracker4 />
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="absolute bg-[rgba(58,58,61,0.3)] left-[34.53px] rounded-[14px] size-[15.988px] top-[11.18px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.988px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[38.935px] left-[1101.5px] top-0 w-[122.423px]" data-name="TableCell">
      <PrimitiveButton2 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[38.935px] left-0 top-[38.94px] w-[1223.92px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.988px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[38.441px] left-0 top-0 w-[428.364px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[7.99px] text-[#f5f5f7] text-[14px] text-nowrap top-[7.47px] whitespace-pre">Organic Chemistry - Reaction Mechanisms</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[rgba(255,107,74,0.1)] h-[21.96px] left-[7.99px] rounded-[14px] top-[8.49px] w-[73.071px]" data-name="Badge">
      <div className="h-[21.96px] overflow-clip relative rounded-[inherit] w-[73.071px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[16px] left-[8.98px] text-[#f5f5f7] text-[12px] text-nowrap top-[1.98px] whitespace-pre">Chemistry</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.988px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[38.441px] left-[428.36px] top-0 w-[220.293px]" data-name="TableCell">
      <Badge2 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[38.441px] left-[648.66px] top-0 w-[183.58px]" data-name="TableCell">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] left-[7.99px] text-[#f5f5f7] text-[14px] text-nowrap top-[7.47px] whitespace-pre">Oct 20, 2025</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute left-0 rounded-[3.31402e+07px] size-[15.988px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#86868b] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[3.31402e+07px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute left-[21.98px] rounded-[3.31402e+07px] size-[15.988px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#86868b] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[3.31402e+07px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute left-[43.95px] rounded-[3.31402e+07px] size-[15.988px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#86868b] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[3.31402e+07px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute left-[65.93px] rounded-[3.31402e+07px] size-[15.988px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#86868b] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[3.31402e+07px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute left-[87.9px] rounded-[3.31402e+07px] size-[15.988px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#86868b] border-[1.975px] border-solid inset-0 pointer-events-none rounded-[3.31402e+07px]" />
    </div>
  );
}

function StudyTracker5() {
  return (
    <div className="absolute h-[15.988px] left-[7.99px] top-[11.47px] w-[253.272px]" data-name="StudyTracker">
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[38.441px] left-[832.24px] top-0 w-[269.259px]" data-name="TableCell">
      <StudyTracker5 />
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="absolute bg-[rgba(58,58,61,0.3)] left-[35.53px] rounded-[14px] size-[15.988px] top-[11.24px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.988px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[38.441px] left-[1101.5px] top-0 w-[122.423px]" data-name="TableCell">
      <PrimitiveButton3 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[38.441px] left-0 top-[77.87px] w-[1223.92px]" data-name="TableRow">
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[116.312px] left-0 top-[40px] w-[1223.92px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[156.312px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function StudyTracker6() {
  return (
    <div className="h-[156.312px] relative shrink-0 w-[1223.92px]" data-name="StudyTracker">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[156.312px] items-start overflow-clip relative rounded-[inherit] w-[1223.92px]">
        <Table />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#2a2a2d] box-border content-stretch flex flex-col h-[182.284px] items-start p-[0.988px] relative rounded-[16px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.988px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <StudyTracker6 />
    </div>
  );
}

function StudyTracker7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.997px] h-[336.204px] items-start left-[24px] top-[88.98px] w-[1225.9px]" data-name="StudyTracker">
      <Container1 />
      <Container2 />
      <Card />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p246b5c00} id="Vector" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M5.99537 1.99846V13.9892" id="Vector_2" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[27.994px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[27.994px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[23.997px] relative shrink-0 w-[93.981px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.997px] relative w-[93.981px]">
        <p className="absolute bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#f5f5f7] text-[16px] text-nowrap top-[-2.01px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(245, 245, 247) 0%, rgb(245, 245, 247) 100%), linear-gradient(166.373deg, rgb(255, 107, 74) 0%, rgb(255, 142, 107) 100%)" }}>
          Study Tracker
        </p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute box-border content-stretch flex gap-[15.988px] h-[63.997px] items-center left-0 pl-[23.997px] pr-0 py-0 top-0 w-[1273.89px]" data-name="Container">
      <Button7 />
      <Heading1 />
    </div>
  );
}

function SidebarTrigger() {
  return (
    <div className="absolute content-stretch flex items-start left-[37.5px] overflow-clip size-[0.988px] top-[31.5px]" data-name="SidebarTrigger">
      <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f5f5f7] text-[14px] text-nowrap whitespace-pre">Toggle Sidebar</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[rgba(29,29,31,0.6)] h-[64.985px] left-0 top-0 w-[1273.89px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.988px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none" />
      <Container18 />
      <SidebarTrigger />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 bg-[#1d1d1f] grow h-[809.877px] min-h-px min-w-px relative shrink-0" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[809.877px] overflow-clip relative rounded-[inherit] w-full">
        <StudyTracker7 />
        <Container19 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="basis-0 grow h-[809.877px] min-h-px min-w-px relative shrink-0" data-name="App">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[809.877px] items-start relative w-full">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="h-[809.877px] relative shrink-0 w-0" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[809.877px] w-0" />
    </div>
  );
}

function SidebarProvider() {
  return (
    <div className="absolute content-stretch flex h-[809.877px] items-start left-0 top-0 w-[1529.88px]" data-name="SidebarProvider">
      <App />
      <Section />
    </div>
  );
}

function SidebarGroupLabel() {
  return (
    <div className="absolute box-border content-stretch flex h-[31.991px] items-center left-[7.99px] px-[8px] py-0 rounded-[14px] top-[7.99px] w-[239.012px]" data-name="SidebarGroupLabel">
      <p className="bg-clip-text font-['Arimo:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[#f5f5f7] text-[12px] text-nowrap whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(245, 245, 247) 0%, rgb(245, 245, 247) 100%), linear-gradient(168.111deg, rgb(255, 107, 74) 0%, rgb(255, 142, 107) 100%)" }}>
        Task Manager
      </p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_23_13369)" id="Icon">
          <path d="M5.32922 1.3323V3.99691" id="Vector" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M10.6584 1.3323V3.99691" id="Vector_2" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p18fce100} id="Vector_3" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M1.99846 6.66152H13.9892" id="Vector_4" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_23_13369">
            <rect fill="white" height="15.9877" width="15.9877" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function App1() {
  return (
    <div className="h-[19.985px] relative shrink-0 w-[37.515px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.985px] items-start overflow-clip relative rounded-[inherit] w-[37.515px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f5f5f7] text-[14px] text-nowrap whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function SidebarMenuButton() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.994px] h-[31.991px] items-center left-0 overflow-clip pl-[7.994px] pr-0 py-0 rounded-[14px] top-0 w-[239.012px]" data-name="SidebarMenuButton">
      <Icon7 />
      <App1 />
    </div>
  );
}

function SidebarMenuItem() {
  return (
    <div className="absolute h-[31.991px] left-0 top-0 w-[239.012px]" data-name="SidebarMenuItem">
      <SidebarMenuButton />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_23_13348)" id="Icon">
          <path d="M7.99383 4.66307V13.9892" id="Vector" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p2061ddc0} id="Vector_2" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_23_13348">
            <rect fill="white" height="15.9877" width="15.9877" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function App2() {
  return (
    <div className="h-[19.985px] relative shrink-0 w-[85.201px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.985px] items-start overflow-clip relative rounded-[inherit] w-[85.201px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f5f5f7] text-[14px] text-nowrap whitespace-pre">Study Tracker</p>
      </div>
    </div>
  );
}

function SidebarMenuButton1() {
  return (
    <div className="absolute bg-[#3a3a3d] box-border content-stretch flex gap-[7.994px] h-[31.991px] items-center left-0 overflow-clip pl-[7.994px] pr-0 py-0 rounded-[14px] top-0 w-[239.012px]" data-name="SidebarMenuButton">
      <Icon8 />
      <App2 />
    </div>
  );
}

function SidebarMenuItem1() {
  return (
    <div className="absolute h-[31.991px] left-0 top-[35.99px] w-[239.012px]" data-name="SidebarMenuItem">
      <SidebarMenuButton1 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_23_13344)" id="Icon">
          <path d={svgPaths.p2c55e560} id="Vector" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p25976a80} id="Vector_2" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_23_13344">
            <rect fill="white" height="15.9877" width="15.9877" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function App3() {
  return (
    <div className="h-[19.985px] relative shrink-0 w-[31.728px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.985px] items-start overflow-clip relative rounded-[inherit] w-[31.728px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f5f5f7] text-[14px] text-nowrap whitespace-pre">Tasks</p>
      </div>
    </div>
  );
}

function SidebarMenuButton2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.994px] h-[31.991px] items-center left-0 overflow-clip pl-[7.994px] pr-0 py-0 rounded-[14px] top-0 w-[239.012px]" data-name="SidebarMenuButton">
      <Icon9 />
      <App3 />
    </div>
  );
}

function SidebarMenuItem2() {
  return (
    <div className="absolute h-[31.991px] left-0 top-[71.97px] w-[239.012px]" data-name="SidebarMenuItem">
      <SidebarMenuButton2 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pace96f0} id="Vector" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p307a9a00} id="Vector_2" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p11a4e880} id="Vector_3" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p182dee00} id="Vector_4" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function App4() {
  return (
    <div className="h-[19.985px] relative shrink-0 w-[73.395px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.985px] items-start overflow-clip relative rounded-[inherit] w-[73.395px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f5f5f7] text-[14px] text-nowrap whitespace-pre">Dashboards</p>
      </div>
    </div>
  );
}

function SidebarMenuButton3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.994px] h-[31.991px] items-center left-0 overflow-clip pl-[7.994px] pr-0 py-0 rounded-[14px] top-0 w-[239.012px]" data-name="SidebarMenuButton">
      <Icon10 />
      <App4 />
    </div>
  );
}

function SidebarMenuItem3() {
  return (
    <div className="absolute h-[31.991px] left-0 top-[107.96px] w-[239.012px]" data-name="SidebarMenuItem">
      <SidebarMenuButton3 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_23_13359)" id="Icon">
          <path d={svgPaths.p28ffc040} id="Vector" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p4635660} id="Vector_2" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M5.32922 7.99383H10.6584" id="Vector_3" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_23_13359">
            <rect fill="white" height="15.9877" width="15.9877" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function App5() {
  return (
    <div className="h-[19.985px] relative shrink-0 w-[30.802px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.985px] items-start overflow-clip relative rounded-[inherit] w-[30.802px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f5f5f7] text-[14px] text-nowrap whitespace-pre">Links</p>
      </div>
    </div>
  );
}

function SidebarMenuButton4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.994px] h-[31.991px] items-center left-0 overflow-clip pl-[7.994px] pr-0 py-0 rounded-[14px] top-0 w-[239.012px]" data-name="SidebarMenuButton">
      <Icon11 />
      <App5 />
    </div>
  );
}

function SidebarMenuItem4() {
  return (
    <div className="absolute h-[31.991px] left-0 top-[143.95px] w-[239.012px]" data-name="SidebarMenuItem">
      <SidebarMenuButton4 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_23_13323)" id="Icon">
          <path d={svgPaths.p2a0ce600} id="Vector" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p3b0cecc0} id="Vector_2" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p25fc6840} id="Vector_3" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p1e5e9b00} id="Vector_4" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p3c556140} id="Vector_5" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M7.99383 8.65998H10.6584" id="Vector_6" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p17ae5480} id="Vector_7" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d="M7.99383 5.32922H13.323" id="Vector_8" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p297e2600} id="Vector_9" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p13a22c40} id="Vector_10" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p3627be80} id="Vector_11" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p36a2d100} id="Vector_12" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p2b82e000} id="Vector_13" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
        <defs>
          <clipPath id="clip0_23_13323">
            <rect fill="white" height="15.9877" width="15.9877" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function App6() {
  return (
    <div className="h-[19.985px] relative shrink-0 w-[165.417px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.985px] items-start overflow-clip relative rounded-[inherit] w-[165.417px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f5f5f7] text-[14px] text-nowrap whitespace-pre">Spaced Repetition Settings</p>
      </div>
    </div>
  );
}

function SidebarMenuButton5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.994px] h-[31.991px] items-center left-0 overflow-clip pl-[7.994px] pr-0 py-0 rounded-[14px] top-0 w-[239.012px]" data-name="SidebarMenuButton">
      <Icon12 />
      <App6 />
    </div>
  );
}

function SidebarMenuItem5() {
  return (
    <div className="absolute h-[31.991px] left-0 top-[179.94px] w-[239.012px]" data-name="SidebarMenuItem">
      <SidebarMenuButton5 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[15.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p20f26800} id="Vector" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
          <path d={svgPaths.p358aa170} id="Vector_2" stroke="var(--stroke-0, #F5F5F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3323" />
        </g>
      </svg>
    </div>
  );
}

function App7() {
  return (
    <div className="h-[19.985px] relative shrink-0 w-[50.741px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.985px] items-start overflow-clip relative rounded-[inherit] w-[50.741px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f5f5f7] text-[14px] text-nowrap whitespace-pre">Account</p>
      </div>
    </div>
  );
}

function SidebarMenuButton6() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.994px] h-[31.991px] items-center left-0 overflow-clip pl-[7.994px] pr-0 py-0 rounded-[14px] top-0 w-[239.012px]" data-name="SidebarMenuButton">
      <Icon13 />
      <App7 />
    </div>
  );
}

function SidebarMenuItem6() {
  return (
    <div className="absolute h-[31.991px] left-0 top-[215.93px] w-[239.012px]" data-name="SidebarMenuItem">
      <SidebarMenuButton6 />
    </div>
  );
}

function SidebarMenu() {
  return (
    <div className="absolute h-[247.917px] left-[7.99px] top-[39.98px] w-[239.012px]" data-name="SidebarMenu">
      <SidebarMenuItem />
      <SidebarMenuItem1 />
      <SidebarMenuItem2 />
      <SidebarMenuItem3 />
      <SidebarMenuItem4 />
      <SidebarMenuItem5 />
      <SidebarMenuItem6 />
    </div>
  );
}

function SidebarGroup() {
  return (
    <div className="absolute h-[295.895px] left-0 top-0 w-[255px]" data-name="SidebarGroup">
      <SidebarGroupLabel />
      <SidebarMenu />
    </div>
  );
}

function SidebarGroupLabel1() {
  return (
    <div className="h-[31.991px] relative rounded-[14px] shrink-0 w-[239.012px]" data-name="SidebarGroupLabel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.991px] items-center px-[8px] py-0 relative w-[239.012px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[rgba(245,245,247,0.7)] text-nowrap whitespace-pre">Appearance</p>
      </div>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[13.997px] relative shrink-0 w-[70.88px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[13.997px] items-center relative w-[70.88px]">
        <p className="font-['Arimo:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#f5f5f7] text-[14px] text-nowrap whitespace-pre">Dark Mode</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="bg-white relative rounded-[3.31402e+07px] shrink-0 size-[15.988px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[15.988px]" />
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[20px] relative rounded-[3.31402e+07px] shrink-0 w-[35.988px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.988px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[3.31402e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center pl-[14.975px] pr-[0.988px] py-[0.988px] relative w-[35.988px]">
        <PrimitiveSpan />
      </div>
    </div>
  );
}

function App8() {
  return (
    <div className="h-[35.988px] relative shrink-0 w-[239.012px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[35.988px] items-center justify-between px-[7.994px] py-0 relative w-[239.012px]">
        <PrimitiveLabel />
        <PrimitiveButton4 />
      </div>
    </div>
  );
}

function SidebarGroup1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[1.335e_-5px] h-[83.966px] items-start left-0 pb-0 pl-[7.994px] pr-0 pt-[7.994px] top-[303.89px] w-[255px]" data-name="SidebarGroup">
      <SidebarGroupLabel1 />
      <App8 />
    </div>
  );
}

function SidebarContent() {
  return (
    <div className="absolute bg-[#2a2a2d] h-[809.877px] left-0 top-0 w-[255px]" data-name="SidebarContent">
      <div className="h-[809.877px] overflow-clip relative rounded-[inherit] w-[255px]">
        <SidebarGroup />
        <SidebarGroup1 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0.988px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function SmartPortal() {
  return (
    <div className="bg-[#1d1d1f] relative size-full" data-name="Smart Portal">
      <SidebarProvider />
      <SidebarContent />
    </div>
  );
}