import React from 'react';
import { data } from '../../../../../data/data';

const Entertainment = ( ) => {


  return (
    <div>
        <h3>Entretenimento</h3>

        <ul>
          {data.filter((categories) => categories.category === "Entertainment").map(
            (item) => <li key={item.id}>
              <h2>1 - Pergunta: {item.question}</h2>
              {item.options.map((option) => 
              <button onClick={(e) => e.target.value === item.correctAnswer}>{option.text}</button>
              )}
            </li>
          )}
        </ul>
    </div>
  );
}

export default Entertainment;