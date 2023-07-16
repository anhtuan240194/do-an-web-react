
import { Col, Row, Form } from "react-bootstrap";
import { useForm} from "react-hook-form";


interface IFormPayment {
  phone: string;
  name: string;
  address: string;
  note: string
}

export default function OrderInfo() {
  const { register, handleSubmit, formState, reset } = useForm<IFormPayment>({
    defaultValues: {
      name: "",
      note: "",
      phone: "",
      address: ""
    },
  });
  const onSubmit = (values: IFormPayment) => {
    console.log(values)
    reset({name:"", address:"", phone:"", note:""});
  }
  return (
    <div className="infor_payment p-3 mt-4 mb-4 rounded-3">
      <h4 className="mb-3 fw-bold">THÔNG TIN ĐẶT HÀNG</h4>
      <Form onSubmit={handleSubmit(onSubmit)} id="orderInfor">
        <Row>
          <Col xs={12} lg={6} sm={6} className="mb-3"> 
            <Form.Group>
              <Form.Label htmlFor="name">Họ tên</Form.Label>
              <Form.Control id="name" type="text" placeholder="Họ tên *"
              {...register("name", {
                required: {
                  value: true,
                  message: "Không được để trống họ tên"
                },
                minLength: {
                  value: 2,
                  message: "Họ tên phải tối thiểu 2 ký tự"
                }
              })}
              isInvalid={!!formState.errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {formState.errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12} lg={6} sm={6} className="mb-3">
              <Form.Group>
                <Form.Label htmlFor="phone">Số điện thoại</Form.Label>
                <Form.Control id="phone" type="text" placeholder="Số điện thoại*"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Không dược để trống số điện thoại"
                  },
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Số điện thoại sai định dạng"
                  }
                })}
                isInvalid={!!formState.errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {formState.errors.phone?.message}
                </Form.Control.Feedback>
              </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
              <Form.Group>
                <Form.Label htmlFor="address">Địa chỉ nhận hàng</Form.Label>
                <Form.Control id="address" type="text" placeholder="Địa chỉ nhận hàng*"
                 {...register("address", {
                  required: {
                    value:true,
                    message: "Không được để trống địa chỉ nhận hàng"
                  }
                  })}
                  isInvalid = {!!formState.errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formState.errors.address?.message}
                  </Form.Control.Feedback>
              </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form.Group>
            <Form.Label htmlFor="note">Ghi chú</Form.Label>
            <Form.Control as="textarea" type="text" placeholder="Nội dung ghi chú cho đơn hàng" id="note"/>
          </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
