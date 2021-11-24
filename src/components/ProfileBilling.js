import React from 'react';
import {BillingData} from './BillingData';

export const ProfileBilling = () => {
    return (
        <div>
            <div className='flex billingContainer'>
                <button className='referenceId'>REFERENCE ID</button>
                <button className='date'>DATE</button>
                <button className='amount'>AMOUNT</button>
                <button className='invoice'>INVOICE</button>
            </div>
            {BillingData.map((data) => {
                return (
                    <div className='flex billingContainer'>
                        <div className='referenceId recordsText'>{data.referenceId}</div>
                        <div className='date recordsText'>{data.date}</div>
                        <div className='amount recordsText'>{data.amount}</div>
                        <img src={data.icon} alt="" />
                    </div>
                    
                )
            })}
        </div>
    )
}
