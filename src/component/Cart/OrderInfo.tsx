
import { Col, Row, Container, Button, Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";


interface IFormPayment {
  phone: number;
  name: string;
  address: string;
  note: string
}

export default function OrderInfo() {
  const { register, handleSubmit, formState } = useForm<IFormPayment>();
  
  return (
    <div className="infor_payment p-3 mt-4 mb-4 rounded-3">
      <h4 className="mb-3 fw-bold">THÔNG TIN ĐẶT HÀNG</h4>
      <Form onSubmit={handleSubmit()}>
        <Row>
          <Col xs={12} lg={6} sm={6}>
            <Form.Group>
              <Form.Label>Họ tên</Form.Label>
              <Form.Control type="text" placeholder="Họ tên *"
              {...register("name", {
                required: {
                  value: true,
                  message: "Không được để trống họ tên"
                },
                minLength: {
                  value: 2,
                  message: "Họ tên phải tối thiểu 2 ký tự"
                },
                pattern: {
                  value: /^[a-zA-Z ]{2,}$/,
                  message:"Tên chỉ được chứa ký tự chữ và dấu cách"
                }
              })}
              isInvalid={!!formState.errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {formState.errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col xs={12} lg={6} sm={6}>
              <Form.Group>
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control type="text" placeholder="Số điện thoại*"
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
          <Col>
              <Form.Group>
                <Form.Label>Địa chỉ nhận hàng</Form.Label>
                <Form.Control type="text" placeholder="Địa chỉ nhận hàng*"
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
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
