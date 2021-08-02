import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import ApiCreate from '../../../services'
import { useHistory } from 'react-router'
import { useParams } from "react-router-dom";
import NavbarComponent from '../../../Components/Navbar'
import './index.css'
import Toast from 'light-toast';

const ViewClass = () => {
    const redirect = useHistory()
    const [classData, setClassData] = useState()
    const { id_class } = useParams()

    useEffect(() => {
        ApiCreate('GET', `classes?id=${id_class}`).then((res) => {
            setClassData(res.data)
        }).catch(error => {
            Toast.fail('Houve um erro', 1500, ()=>{});
        })
    }, [])



    return (
        <>
            <NavbarComponent />
            <div className="ui equal width grid" id="container-video-yt">
                <div className="column">
                    <div className="video-container">
                        <iframe class="embedded-video-16-9" src={classData?.video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; " allowfullscreen=""></iframe>
                    </div>
                    <h1>{classData?.name_class}</h1>
                    <span>Material: <a target="_blank" href={classData?.material_link}>{classData?.material_link}</a></span>
                    <hr></hr>
                    <button class="ui right labeled icon button">
                        <i class="right arrow icon"></i>
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}

export default ViewClass;