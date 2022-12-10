import React from 'react';
import '../styles/SignUp.css'

function SignUpForm() {
    return (
        <div className='signup-container'>
            <div className='form-container'>
                <form>
                    <label>1.Name*</label>
                    <div className='Names-input'>
                        <input type={'text'} placeholder="First Name" />
                        <input type={'text'} placeholder="Last Name" />
                    </div>

                    <label>2.E-mail*</label>
                    <div className='email-input'>
                        <i class="fa-regular fa-envelope"></i>
                        <input type={'email'}/>
                    </div>

                    <label>3.Telephone*</label>
                    <div className='telephone-input'>
                        <i class="fa-solid fa-phone"></i>
                        <input type={'number'} placeholder="Telephone"/>
                    </div>

                    <label>4.Address*</label>
                    <div className='adress-input'>
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        <input type={'text'} placeholder="Adress" />
                    </div>

                    <label>4.Date of Birth*</label>
                    <div className='date-input'>
                        <i class="fa-regular fa-calendar"></i>
                        <input type={'date'}/>
                    </div>


                    <h3>6.Where did you hear about us?</h3>
                    <div className='about-radio'>

                        <div className='colleague'>
                            <input type={'radio'} id="colleague" value="colleague" name='About' />
                            <label for="colleague">Colleague</label>
                        </div>

                        <div className='google'>
                            <input type={'radio'} id="google" value="google" name='About' />
                            <label for="blog">Google</label>
                        </div>

                        <div className='blog'>
                            <input type={'radio'} id="blog" value="Blog" name='About' />
                            <label for="blog">Blog</label>
                        </div>

                    </div>
                    <div className='check-container'>
                        <input type="checkbox" id="submit" className='checked-input'/>
                        <label>I have read, understood, and accepted the PRIVACY POLICY for membership <a href='#'>Terms and Condition</a></label>
                    </div>
                    
                    <button type="button" class="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm