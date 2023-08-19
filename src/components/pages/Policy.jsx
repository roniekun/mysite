import React from 'react';
import './styles/Policy.css';
import Footer from '../Footer';
import NavbarLinks from './Navlinks';
const Policy = ({isSmallScreen, setShowNavbar}) => {
  return (
    <div className='policy_container'>
          {!isSmallScreen &&<NavbarLinks 
          PolicyNavbarLink={{color: '#181818'}}
            setShowNavbar={setShowNavbar}
            isSmallScreen={isSmallScreen}/>}
      <h2 className='heading'>Privacy Policy</h2>
  <div className="policy">


<h4 className='lists' style={{fontFamily: 'Ranade, sans serif', fontSize:'18px'}}>Effective Date: August 2023</h4><br />

<h3 className='lists'>1. Introduction</h3>
<br/>
 <p className='ptag_policy'>
 Welcome!  <br />
We are committed to protecting your personal information and your right to privacy. 
If you have any questions or concerns about our policy or our practices with regards to your personal information, 
please contact us. <br />
 </p>

<p className='ptag_policy'>
When you use our website and our services, you trust us with your personal information.
 We take your privacy very seriously. In this privacy policy, we describe our privacy policy. 
 We seek to explain to you in the clearest way possible what information we collect, how we use it, 
 and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important.
  If there are any terms in this privacy policy that you do not agree with,
   please discontinue use of our Sites and our services.
</p>

  <br />
   <br />
   <br />

<h3 className='lists'>2. Information We Collect</h3> <br/>
<p className='ptag_policy'>
We collect personal information that you provide directly to us. 
The types of personal information we collect include names, email addresses, and any other information you choose to provide.
</p>

  <br />
   <br />
   <br />

<h3 className='lists'>3. How We Use Your Information</h3> <br/>
<p className='ptag_policy'>
We use the information we collect or receive: <br />

- To send you marketing and promotional communications. <br />
- To respond to your inquiries and provide you with user support. <br />
- To send administrative information to you, for example, information regarding our services and
 changes to our terms, conditions, and policies. <br />
- To comply with legal and regulatory obligations.  <br />
</p>

   <br />
   <br />

<h3 className='lists'>4. Sharing of Your Information</h3> <br />
<p className='ptag_policy'>
We will not share your personal information with third parties except as described in this privacy policy. 
We may share your personal information with: <br />

- Service providers who provide IT and system administration services. <br />
- Professional advisers including lawyers, bankers, auditors, and insurers. <br />
- Government bodies that require us to report processing activities. <br />
- Third parties to whom we sell, transfer, or merge parts of our business or our assets.  <br />
</p>

   <br />
   <br />

 <h3 className='lists'>5. Your Choices</h3> <br />
 <p className='ptag_policy'>
 You have the right to opt-out of our marketing communications at any time. 
You can exercise this right by clicking on the "unsubscribe" or "opt-out" link in the marketing emails we send you. 
 </p>
 <br />
   <br />
   <br />

 <h3 className='lists'>6. Contact Us</h3> <br />
 <p className='ptag_policy'>
 If you have any questions about this Privacy Policy, please contact us.  
 </p>
<br />
   <br />
   <br />

 <h3 className='lists'>7. Changes to Our Privacy Policy</h3> <br />
 <p className='ptag_policy'>
 We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
 new Privacy Policy on this page.
 You are advised to review this Privacy Policy periodically for any changes.
 </p>
 <br />
 <br />
   <br />
   <br />
   <br />

<h3 className='lists'>
Discreet <br />
South Cotabato, Philippines, 9510 <br />
roniebenitez01@gmail.com  <br />
   <br />
   <br />

</h3>

</div>


<Footer isSmallScreen={isSmallScreen}/>
</div>
  )
}

export default Policy