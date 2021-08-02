import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import ApiCreate from '../../../services'
import { useHistory } from 'react-router'
import NavbarComponent from '../../../Components/Navbar'
import Toast from 'light-toast';
import { Link } from 'react-router-dom'

const ViewClassAll = () => {
  const redirect = useHistory()

  const [classes, setClasses] = useState([])

  useEffect(() => {
    ApiCreate('GET', `classes/`).then((res) => {
      console.log(res.data)
      setClasses(Array.from(res.data))
    }).catch(error => {
      Toast.fail('Houve um erro', 1500, () => { });
    })
  }, [])

  return (
    <>
      <NavbarComponent />
      <Container text class="ui container">
        <h1 class="ui header" style={{textAlign: 'center'}}>Aulas</h1>
        <div class="ui list">
          {console.log(classes)}
          {classes?.map(classe => {
            return (
              <>
                <div class="item">
                  <i class="map marker icon"></i>
                  <div class="content">
                      <a class="header">
                        <Link to={`visualizar/${classe?.id}`} >
                          {classe?.name_class}
                        </Link>
                      </a>
                    <div class="description">{classe?.comment}</div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default ViewClassAll;