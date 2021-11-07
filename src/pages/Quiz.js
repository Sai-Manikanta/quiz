import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Quiz() {
    const { id } = useParams();
    const [quetion, setQuetion] = useState(null);

    const quetions = [
        { 
            id: 1, 
            quetion: 'React is used for?',
            options: [
                { id: 1, status: 'A', option: 'User Interfaces' },
                { id: 2, status: 'B', option: "Api's" },
                { id: 3, status: 'C', option: "Mobile apps" },
                { id: 4, status: 'D', option: 'Games' }
            ],
            answer: 'A'
        },
        { 
            id: 2, 
            quetion: 'React is maintained by?',
            options: [
                { id: 1, status: 'A', option: 'Google' },
                { id: 2, status: 'B', option: "Facebook" },
                { id: 3, status: 'C', option: "Tesla" },
                { id: 4, status: 'D', option: 'TATA' }
            ],
            answer: 'B'
        }
    ];

    useEffect(() => {
        const quetion = quetions.find(q => q.id === Number(id));
        setQuetion(quetion);
    }, [id])

    return (
        <div>
            {quetion && (
                <div>
                    <h2>{quetion.quetion}</h2>
                    <form>
                      {quetion.options.map(option => (
                          <>
                            <input type="radio" id={quetion.quetion} name={quetion.quetion} value={option.option} />
                            <label htmlFor={quetion.quetion}>
                                {option.option}
                            </label><br />
                          </>
                      ))}
                    </form> 
                </div>
            )}
        </div>
    )
}

export default Quiz
