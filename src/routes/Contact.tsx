import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useForm, SubmitHandler  } from 'react-hook-form';

import IconAddressImg from "../assets/address.svg";
import IconTelephoneImg from "../assets/telephone-call.svg"
import IconEmailImg from "../assets/email.svg"
import IconGoogleMapImg from "../assets/googlemap.png"

interface IFormContact {
  name: string,
  phone: number | null,
  note: string
}

export default function Contact() {
  const {register, handleSubmit, formState, reset} = useForm<IFormContact>({
    defaultValues: {
      name: "",
      phone: null,
      note: ""
    }
  })
  const onSubmit = (values: IFormContact) => {
    alert("Cám ơn bạn đã gửi thông tin, chúng tôi sẽ liên hệ lại bạn sớm nhất có thể")
    reset({name: "", phone:null, note: ""})
  }
  return (
    <>
      <div className="main_page">
        <Container>
          <div className="main_contact p-3 rounded-3">
            <Row>
              <Col xs={12}>
                <h1 className="mb-3 fw-bold">Liên hệ</h1>
              </Col>
              <Col xl={6} sm={12} xs={12}>
                <div className="contact_infor">
                  <ul>
                    <li className="mb-2">
                      <img src={IconAddressImg} alt="Địa chỉ" />
                      <b>Địa chỉ: </b>Tòa S2.16 KĐT Ocean Park, Gia Lâm, Hà Nội
                    </li>
                    <li className="mb-2">
                      <img src={IconTelephoneImg} alt="Hotline" />
                      <b>Hotline: </b>0363 794 451
                    </li>
                    <li className="mb-2">
                      <img src={IconEmailImg} alt="Email" />
                      <b> Email: </b>anhtuanvu241@gmail.com
                    </li>
                    <li className="mb-3">
                      <span>
                        Giấy chứng nhận Đăng ký Kinh doanh số 0363794xxx do Sở
                        Kế hoạch và Đầu tư Thành phố Hà Nội cấp ngày 10/07/2022
                      </span>
                    </li>
                  </ul>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Control
                      type="text"
                      className="mb-2"
                      placeholder="Họ tên"
                      {
                        ...register("name", {
                          required: {
                            value: true,
                            message: "Vui lòng nhập họ tên"
                          },
                          minLength: {
                            value: 2,
                            message: "Họ tên tối thiểu 2 ký tự"
                          }
                        })
                      }
                      isInvalid = {!!formState.errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formState.errors.name?.message}
                    </Form.Control.Feedback>

                    <Form.Control
                      type="mail"
                      className="mb-2"
                      placeholder="Điện thoại*"
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Vui lòng nhập số điện thoại"
                        },
                        minLength: {
                          value: 10,
                          message: "Số điện thoại tối thiểu 10 ký tự"
                        }
                      })}
                      isInvalid = {!!formState.errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formState.errors.phone?.message}
                    </Form.Control.Feedback>

                    <Form.Control
                      as="textarea"
                      placeholder="Nội dung liên hệ"
                      {...register("note", {
                        required: {
                          value: true,
                          message: "Bạn chưa nhập lời nhắn rồi"
                        },
                        minLength: {
                          value: 10,
                          message: "Nội dung liên hệ tối thiểu 10 ký tự"
                        }
                      })}
                      isInvalid = {!!formState.errors.note}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formState.errors.note?.message}
                    </Form.Control.Feedback>


                    <Button
                      className="p-2 mt-3"
                      type="submit"
                    >
                      Gửi thông tin
                    </Button>
                  </Form>
                </div>
              </Col>
              <Col xl={6} sm={12} xs={12}>
                <img src={IconGoogleMapImg} alt="Bản đồ liên hệ" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
