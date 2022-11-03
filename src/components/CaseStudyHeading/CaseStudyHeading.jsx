import "./_CaseStudyHeading.scss";

const CaseStudyHeading = (props) => {
  return (
    <div className="case-study-header-wrapper">
      <h3 className="slide-right">Case Study {props.caseNumber}</h3>
      <h1 className="slide-right">{props.case}</h1>
    </div>
  );
};

export default CaseStudyHeading;
