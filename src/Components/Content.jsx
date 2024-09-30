import React from 'react'

const Content = ({len, res, setLen, setRes, msg, setMsg}) => {

    const up =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const low = 'abcdefghijklmnopqrstuvwxyz'
    const num = '1234567890'
    const sym = '@#$^&*%!'

    function clickHandler(e){
        e.preventDefault()

        if(len < 8){
            setMsg(true)
        }
        else{
            setMsg(false)
        }

        let out = ''
        let count = len / (document.forms[0].elements[1].checked + document.forms[0].elements[2].checked + document.forms[0].elements[3].checked + document.forms[0].elements[4].checked)

        function pass(type){
            for(let i = 0; i < count; i++){
                out += type[Math.floor(Math.random() * type.length)]
            }
        }

        if(document.forms[0].elements[1].checked){
            pass(up)
        }
        if(document.forms[0].elements[2].checked){
            pass(low)
        }
        if(document.forms[0].elements[3].checked){
            pass(num)
        }
        if(document.forms[0].elements[4].checked){
            pass(sym)
        }

        function shuffle(val, mylen){
            let shf = ''
            for(let i = 0; i < mylen ; i++){
                shf += val[Math.floor(Math.random() * val.length)]
            }
            return shf
        }

        let shuffled = shuffle(out, len)

        setRes(shuffled)

    }

    function copyHandler(e){
        e.preventDefault()
        navigator.clipboard.writeText(res)
    }


  return (
    <>
        <div className="row mt-3">
            <div className="col-sm-4 mx-auto">
                <div className="card" data-bs-theme='dark'>
                    <div className="card-body">
                        <div className="card-title h3 mb-3 text-success">STRONG PASSWORD GENERATOR</div>
                        
                        <form action="">
                            {msg && <p className="form-text">Note : length should be more than 8 characters is recommended</p>}

                            <label htmlFor="l" className="form-label">Password Length</label>
                            <input type="number" className="form-control mb-4" value={len} onChange={(e)=>setLen(e.target.value)} />

                            <div className="form-check">

                                <div>
                                    <label htmlFor="1" className="form-label">Include Uppercase</label>
                                    <input type="checkbox" id='1' className="form-check-input border border-primary" />
                                </div>

                                <div>
                                    <label htmlFor="2" className="form-label">Include Lowercase</label>
                                    <input type="checkbox" id='2' className="form-check-input border border-primary" />
                                </div>

                                <div>
                                    <label htmlFor="3" className="form-label">Include Numbers</label>
                                    <input type="checkbox" id='3' className="form-check-input border border-primary" />
                                </div>

                                <div>
                                    <label htmlFor="4" className="form-label">Include Symbols</label>
                                    <input type="checkbox" id='4' className="form-check-input border border-primary" />
                                </div>

                            </div>

                            <button className="btn btn-primary" onClick={(e) => clickHandler(e)}>Generate Password</button>

                            <div className="input-group mt-4">
                                <input type="text" className="form-control" value={res} />
                                <button className="btn btn-success" onClick={(e)=>copyHandler(e)}>copy</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Content