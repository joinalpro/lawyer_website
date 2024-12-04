
import { Checkbox } from '@mui/material';
import backshImg from '../assets/backsh.png'
import NagadImg from '../assets/nogod.png'
import BankImg from '../assets/bank.png'
import ChequeImg from '../assets/cheque.png'

import { FiArrowRightCircle } from 'react-icons/fi';
import Swal from 'sweetalert2'


// or via CommonJS



const Modal = () => {

    const sweetAlert = () => {
        Swal.fire({
            title: "Congratulations",
            text: "Your Payment successfuly",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `success`
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: `Success!`,
                text: "Thank you",
                icon: "success"
              });
            }
          });
    }

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div className="">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" className="modal">
                <div className="modal-box  lg:px-8 max-w-4xl">

                    <div className="text-center">
                        <h1 className='text-2xl font-bold font-fontMartel text-bla'>Payment Details</h1>
                        <p className='text-kalo leading-5 mt-2 max-w-xl mx-auto'>Payment Details means the details you need to give us to either pay money into your account or take money out of your account</p>
                    </div>

                    <div className="md:flex gap-3 mt-4">
                        <div className="md:w-1/2  space-y-3">
                            <div className='border-2 border-[#d9d9d9] h-[58px]  flex items-center justify-between pl-2   gap-4 hover:border-[#f2af60] duration-1000'>
                                <div className='flex items-center'>
                                    <button className='bg-pink-200 py-2 px-2'>
                                        <img className='w-[50px]' src={backshImg} alt="" />
                                    </button >
                                    <p className='font-bold ml-2'>bKash</p>
                                </div>
                                {/*  */}
                                <Checkbox className='' {...label} />
                            </div>
                            {/* check box 2 */}
                            <div className='border-2  border-[#d9d9d9] h-[58px]  flex items-center justify-between pl-2   gap-4 hover:border-[#f2af60] duration-1000'>
                                <div className='flex items-center'>
                                    <button className=''>
                                        <img className='w-[50px]' src={NagadImg} alt="" />
                                    </button >
                                    <p className='font-bold ml-2'>Nagad</p>
                                </div>
                                {/*  */}
                                <Checkbox className='' {...label} />
                            </div>
                            {/* check box 3 */}
                            <div className='border-2 border-[#d9d9d9] h-[58px]  flex items-center justify-between pl-2   gap-4 hover:border-[#f2af60] duration-1000'>
                                <div className='flex items-center'>
                                    <button className='bg-[#eff6fe] py-2 px-3'>
                                        <img className='w-[25px]' src={BankImg} alt="" />
                                    </button >
                                    <p className='font-bold ml-2'>Bank</p>
                                </div>
                                {/*  */}
                                <Checkbox className='' {...label} />
                            </div>
                            {/* check box 4 */}
                            <div className='border-2 border-[#d9d9d9] h-[58px]  flex items-center justify-between pl-2   gap-4 hover:border-[#f2af60] duration-1000'>
                                <div className='flex items-center'>
                                    <button className='bg-[#f0fdf4] py-2 px-3'>
                                        <img className='w-[25px]' src={ChequeImg} alt="" />
                                    </button >
                                    <p className='font-bold ml-2'>Cheque</p>
                                </div>
                                {/*  */}
                                <Checkbox className='' {...label} />
                            </div>
                        </div>
                        <div className="md:w-1/2 py-4 px-5 mt-5 md:mt-0  border border-gray-300">
                            <h3 className='text-[22px] font-semibold mb-2 font-fontMartel'>Payment Summary</h3>
                            <div className='flex  justify-between'>
                                {/* price and discount */}
                                <div className='space-y-4'>
                                    <p className='font-medium text-[#4d4d4d]'>Base Price</p>
                                    <p className='font-medium text-[#4d4d4d]'>Discount</p>
                                    <p className='font-medium text-[#4d4d4d]'>VAT</p>
                                    <p className='font-semibold font-fontMartel text-[#4d4d4d]'>GST (10)</p>
                                    <p className='font-bold text-bla'>Total</p>
                                </div>
                                {/* price */}
                                <div className='space-y-4'>
                                    <p className=' font-medium text-[#111827]'>$20.00</p>
                                    <p className=' font-medium text-[#111827]'>$0.00</p>
                                    <p className=' font-medium text-[#111827]'>$00</p>
                                    <p className=' font-medium text-[#111827]'>$5.00</p>
                                    <p className=' font-medium text-[#111827]'>$25.00</p>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="mt-3 flex justify-center px-3 md:w-[40%] mx-auto">
                        {/* <button  className='btn btn-error'>SweetAlert</button> */}
                        <form method="dialog" className='w-full'>
                            <button onClick={sweetAlert} className="py-3 w-full md:px-7 px-4 flex justify-center items-center text-[#1c0c3a] gap-2 font-bold bg-[#f2af60]">Continue To Pay
                                <FiArrowRightCircle className="text-xl font-bold" />
                            </button>
                            {/* if there is a button, it will close the modal */}
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;