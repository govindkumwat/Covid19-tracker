import React from 'react'

export const Add = () => {
    return (

        <>


        <div className="col-lg-6 col-10 mx-auto border formdesign mt-5 bg-dark text-white">
            <h4 className="text-center mt-3"><i class="fa fa-heartbeat" aria-hidden="true"></i> Add Patient Details</h4>
            <div class="mb-3 ">
                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name" />
            </div>
            <div class="mb-3 ">
                <label for="exampleFormControlInput1" class="form-label">Middle Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1"  placeholder="Middle Name" />
            </div>
            <div class="mb-3 ">
                <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
            </div>
            <div class="mb-3 ">
                <label for="exampleFormControlInput1" class="form-label">Date of Birth</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Patient DOB" />
            </div>
            <div class="mb-3 ">
                <label for="exampleFormControlInput1" class="form-label">Age</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Patient Age" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Address"></textarea>
            </div>

            <div class="mb-3 ">
                <label for="exampleFormControlInput1" class="form-label">City</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="City" />
            </div>

            <div class="mb-3 ">
                <label for="exampleFormControlInput1" class="form-label">State</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="State" />
            </div>
            <div class="mb-3 ">
                <label for="exampleFormControlInput1" class="form-label">Pin Code/ Postal Code</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Postal Code" />
            </div>
            <div class="mb-3 ">
                <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Patient Contact Number" />
            </div>
            <div class="mb-3 ">
                <label for="exampleFormControlInput1" class="form-label">Guardian's Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Patient Guardian's Name" />
            </div>
            <div class="mb-3 ">
                <label for="exampleFormControlInput1" class="form-label">Guardian's Phone Number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Patient Guardian's Number" />
            </div>

            <button class="btn btn-primary mt-1 mb-3">Add Details</button>
        </div>
        </>


    )
}
