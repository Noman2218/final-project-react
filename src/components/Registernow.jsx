import React from 'react'

const Registernow = () => {
    const timeUnits = [
        { value: '00', label: 'days' },
        { value: '00', label: 'hours' },
        { value: '00', label: 'minutes' },
        { value: '00', label: 'seconds' }
    ];

    return (
        <div className="relative bg-cover bg-center bg-no-repeat py-20 text-white items-center" style={{ backgroundImage: `url('./images/bg121-com.jpg')` }}>
            <div className=' justify-center'>
                <div className=' pl-16 grid  justify-center'>
                    <p className='uppercase font-semibold'>let get 100s of online course for free before expiring</p>
                    <h1 className='text-4xl md:text-5xl font-bold mb-4 uppercase'>register now!!</h1>
                </div>
                <div className="relative flex justify-center space-x-4">
                    {timeUnits.map((unit, index) => (
                        <div key={index} className="flex justify-center items-center bg-transparent border-solid border-2 border-white text-white rounded-full w-20 h-20 mb-4">
                            <span className='flex-col text-center align-middle'>
                                <div className=''>
                                    <h1>{unit.value}</h1>
                                    <h1>{unit.label}</h1>
                                </div>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Registernow;