import Card from "../../components/card/Card"
import Sidebar from "../../components/sidebar/Sidebar"
import './Rewards.css'
import addButton from '../../assets/addbutton.png'
import emoney from '../../assets/emoney.png'
import telkomsel from '../../assets/telkomsel.jpg'
import indosat from '../../assets/indosat.png'
import smartfren from '../../assets/smartfren.jpg'
import { AddRewardModal } from "../../components/modals/AddRewardModal"
const Rewards = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 d-none d-xxl-block">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="title-page row">
                        <div className="col-2">
                            <p>Rewards</p>
                        </div>
                        <div className="col-2">
                            <img src={addButton} alt="illustration" width="20" style={{ marginLeft: 35 }} data-bs-toggle="modal" data-bs-target="#modalFormName" />
                            <AddRewardModal />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <Card img={emoney} desc={"20.000"} point={-5} type={"rewards"} />
                        </div>
                        <div className="col-md-4">
                            <Card img={emoney} desc={"50.000"} point={-10} type={"rewards"} />
                        </div>
                        <div className="col-md-4">
                            <Card img={emoney} desc={"100.000"} point={-13} type={"rewards"} />
                        </div>
                        <div className="col-md-4">
                            <Card img={telkomsel} desc={"20.000"} point={-5} type={"rewards"} />
                        </div>
                        <div className="col-md-4">
                            <Card img={indosat} desc={"50.000"} point={-10} type={"rewards"} />
                        </div>
                        <div className="col-md-4">
                            <Card img={smartfren} desc={"100.000"} point={-13} type={"rewards"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rewards