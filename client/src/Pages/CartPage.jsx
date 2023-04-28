import { useSelector, useDispatch } from "react-redux"
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import { addToCart,deleteFromCart } from "../Actions/cartAction"
import { FaTrash } from "react-icons/fa"
import { Container, Row, Col } from "react-bootstrap";
import Checkout from "../Components/Checkout";

export default function CartPage() {
    const cartState = useSelector((state) => state.cartReducer)
    const cartItems = cartState.cartItems
    const dispatch = useDispatch()
    const subtotal = cartItems.reduce((acc, item)=>acc+item.price,0)

    return (
        <>
      <Container>
        <Row>
          <Col md={6}>
            <h1>My Cart</h1>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col md={7}>
                    <h5>
                      {item.name} [{item.varient}]
                    </h5>
                    <h6>
                      {" "}
                      Price : {item.quantity} X {item.prices[0][item.varient]} ={" "}
                      {item.price}
                    </h6>

                    <h6>
                      Quantity :&nbsp;
                      <AiFillMinusCircle
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      />{" "}
                      &nbsp;
                      {item.quantity} &nbsp;
                      <AiFillPlusCircle
                        className="text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      />
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ width: "80px", height: "80px" }}
                    />
                    <FaTrash
                      className="text-danger"
                      style={{ cursor: "pointer", marginLeft: "20px" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    />
                  </Col>
                  <hr />
                </>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <h1>Payment Info</h1>
            <h4>Subtotal</h4>
            <h4>Rs :{subtotal}/-</h4>
            <Checkout subtital={subtotal} />
          </Col>
        </Row>
      </Container>
    </>
    )
}