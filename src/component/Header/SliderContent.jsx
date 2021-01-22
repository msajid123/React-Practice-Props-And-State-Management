import React from 'react'


/*

  (condition  ?   true Statement   :   false Satement)


*/





export default (props) => {
    
    return (
        <div className={props.active?"slide active":"slide"} >
            <div className="container">
                <div className="caption">
                    <h1 className='Heading'>
                        <span className="heading__sec">
                            {
                                props.content['one']
                            }
                        </span>
                        <span className="heading__pri">
                            {
                                props.content['two']
                            }
                        </span>
                        <span className="heading__ter">
                            {
                                props.content['three']
                            }
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    )
}
