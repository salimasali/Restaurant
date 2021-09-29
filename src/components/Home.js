import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Restaurants from './Restaurants'
import {useDispatch,useSelector} from 'react-redux'
import {listRestaurants} from '../action/restaurantAction'

function Home() {

    const dispatch =useDispatch();

    const restaurantReducer =useSelector(state => state.restaurantReducer)
    
    const {loading,error,restaurants }= restaurantReducer

    const [filter, setFilter] = useState("")

    useEffect(()=>{
        dispatch(listRestaurants())
    },[dispatch])
    
//     const[hotels,setHotels]=useState([]);
//     const [filter,setFilter]=useState("")
// useEffect(() => {
//     const fetchData = async()=> {
//         await fetch('/restaurants.json')
//         .then(res => res.json())
//         .then(data =>{
//             setHotels(data.restaurants)
//         })
//     }

//     fetchData();
    
    
// }, [])
// console.log("data is ",hotels);
    return (
        <Row>
            <input
            value={filter}
            placeholder="Search a location"
            type="text"
            onChange={e => setFilter(e.target.value)}/>
            {restaurants ?
            (restaurants.filter(item => {
                if(filter == ""){
                    return item
                }
                else if(item.neighborhood.toLowerCase().includes(filter.toLowerCase())){
                    return item
                }
            })
            .map(item => (
                <Col sm={12} md={8} lg={6} xl={3}>
                    <Restaurants data={item} />

                </Col>
            ))): "error"
            }
        </Row>
    )
}

export default Home
