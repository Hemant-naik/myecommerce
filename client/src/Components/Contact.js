import React from 'react'

function Contact() {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <table className="w-100 mt-5 table" >
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <h1 className="fw-bold">CONTACT US</h1>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>
                                        <input type="text" name="k1" placeholder="Enter Your Name" className="form-control border border-2 border-success w-100"  />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <input type="Email" name="k1" placeholder="Enter Your Email" className="form-control border border-2 border-success w-100"  />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Contact</td>
                                    <td>
                                        <input type="text" name="k1" placeholder="Enter Your Contact" className="form-control border border-2 border-success w-100"  />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Message</td>
                                    <td>
                                        <input type="text" name="k1" placeholder="Enter Your Message" className="form-control border border-2 border-success w-100"  />
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <button className="text-white bg-primary border border-2 bg-primary" style={{ borderradius: '8px' }}> SEND MESSAGE </button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <div className="col-lg-5">
                        <div className="row">
                            <iframe id="frame1" title='frame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67580.43256245989!2d74.4965451015042!3d13.99685390010179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc431e28dabfab%3A0x7060a42cfeac9a4!2sBhatkal%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1704026594918!5m2!1sen!2sin"
                                width={850} height={350} style={{ border:'0' ,
                                allowfullscreen:"",  loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}} className="mt-5 ms-5"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
