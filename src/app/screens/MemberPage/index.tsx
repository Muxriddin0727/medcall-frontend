import type {FC}  from "react";
import Dashboard from "./Dashboard";
import AccountDetails from "./AccountDetails";
import MyAppointments from "./MyAppointments";
import MyDoctors from "./MyDoctors";
import SocialHub from "./Social Hub";


const MemberPage: FC = () => {
    return (
       
        <div className="flex my-[62px] gap-[30px]">
        <Dashboard />
        {/* <AccountDetails />
        <MyAppointments />
        <MyDoctors/>
        <SocialHub/> */}

      </div>
    
)};

export default MemberPage;