import React from "react";
import "./question.scss";
import { DATA } from "../../static";
import { Link, useParams } from "react-router-dom";

const Question = () => {
  const { id } = useParams();
  const dataIndex = parseInt(id, 10) - 1;

  const data =
    dataIndex >= 0 && dataIndex < DATA.length ? DATA[dataIndex] : null;

  console.log(data);
  console.log(DATA);

  return (
    <section className="question">
      <div className="container">
        <h3 className="question__title">Questions</h3>
        <div className="question__list">
          <div className="question__item">
            {data && (
              <>
                <p>
                  {data.id}. {data?.question}
                </p>
                <div>
                  <Link to={`/question/${dataIndex + 2}`}>Yo'q</Link>{" "}
                  <Link
                    onClick={() => (data.answer = true)}
                    to={`/question/${dataIndex + 2}`}
                  >
                    Ha
                  </Link>{" "}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
