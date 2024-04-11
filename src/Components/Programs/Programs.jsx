import "./Programs.css";
import program_1 from "/images/worker1.png";
import program_2 from "/images/labour.jpeg";
import program_3 from "/images/helper1.jpeg";
import program_icon_1 from "/images/worker-icon.png";
import program_icon_2 from "/images/labour-icon.png";

import program_icon_3 from "/images/helper-icon.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Worker</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Labourer</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Helper</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
