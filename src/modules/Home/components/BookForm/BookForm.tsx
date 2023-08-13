import * as S from '@/modules/Home/components/BookForm/styled';
import Text from '@/components/Text';
import { useFormik } from 'formik';
import { Input, Colors } from '@/modules/Home/components/Input';
import { addData, IFormValues } from '@/utils/firebase';
import toast from 'react-hot-toast';
import React from 'react';
import { IColor } from '@/modules/Home/components/Input/Colors';
import Wood from '@/modules/Home/components/Input/Wood';
import { sendMessage } from '@/services/telegram';

const BookForm = () => {
  const validateForm = (values: IFormValues): Record<string, string> => {
    const errors: Record<string, string> = {};
    if (!values.productName) {
      errors.productName = 'Required.';
    }
    if (!values.width) {
      errors.width = 'Required.';
    }
    if (!values.deep) {
      errors.deep = 'Required.';
    }
    if (!values.height) {
      errors.height = 'Required.';
    }
    if (!values.color) {
      errors.color = 'Required.';
    }
    if (!values.number) {
      errors.number = 'Required.';
    }
    if (!values.description) {
      errors.description = 'Required.';
    }

    if (values.imageLink && values.imageLink.startsWith('https://')) {
      errors.imageLink = 'Image link must be a valid url';
    }

    if (!values.userName) {
      errors.userName = 'Required.';
    }

    // validate vietnamese phone number
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Required.';
    } else if (!values.phoneNumber.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g)) {
      errors.phoneNumber = 'Phone number must be a valid phone number';
    }

    if (!values.email) {
      errors.email = 'Required.';
    } else if (!values.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g)) {
      errors.email = 'Email must be a valid email';
    }

    if (!values.woodType) {
      errors.woodType = 'Required.';
    }

    return errors;
  };
  const handleSubmit = async (values: IFormValues) => {
    try {
      const orderID = await addData(values);
      sendMessage(values, orderID);
      toast.success('Đặt hàng thành công');
    } catch (error) {
      console.log(error);
      toast.error('Đã có lỗi xảy ra, vui lòng thử lại sau');
    }
  };

  const formik = useFormik({
    initialValues: {
      productName: '',
      width: '',
      deep: '',
      height: '',
      color: '',
      colorImage: '',
      number: '',
      description: '',
      imageLink: '',
      userName: '',
      phoneNumber: '',
      email: '',
      facebook: '',
      woodType: '',
    } as IFormValues,
    onSubmit: handleSubmit,
    validate: validateForm,
  });

  const { errors, touched, handleChange, isSubmitting } = formik;

  return (
    <S.Form onSubmit={formik.handleSubmit} id="booking">
      <S.Container>
        <S.Content>
          <Text size="56" fontWeight="semibold" align="center" className="mt-32">
            Gửi yêu cầu đặt hàng
          </Text>
          <S.FormContent>
            <S.Space />
            <S.HeaderSection>Thông tin sản phẩm</S.HeaderSection>
            <Input
              id="productName"
              label="Tên sản phẩm"
              onChange={handleChange}
              error={touched.productName && errors.productName}
            />
            <S.Row>
              <Input
                id="width"
                label="Ngang"
                type="number"
                onChange={handleChange}
                error={touched.width && errors.width}
              />
              <Input id="deep" label="Sâu" type="number" onChange={handleChange} error={touched.deep && errors.deep} />
              <Input
                id="height"
                label="Cao"
                subLabel={'(cm)'}
                type="number"
                onChange={handleChange}
                error={touched.height && errors.height}
              />
            </S.Row>
            <S.Row>
              <Colors
                label="Màu sắc"
                error={touched.color && errors.color}
                onChange={(item: IColor) => {
                  formik.setFieldValue('color', item.name);
                  formik.setFieldValue('colorImage', item.image);
                }}
                selectedColor={{
                  name: formik.values.color,
                  image: formik.values.colorImage,
                }}
              />
              <Wood
                label="Loại ván gỗ"
                isRequired={true}
                error={touched.woodType && errors.woodType}
                selected={formik.values.woodType}
                onChange={(item: string) => {
                  formik.setFieldValue('woodType', item);
                }}
              />
              <Input
                id="number"
                label="Số lượng"
                type="number"
                onChange={handleChange}
                error={touched.number && errors.number}
              />
            </S.Row>
            <Input
              id="description"
              label="Mô tả"
              isTextArea={true}
              isRequired={false}
              onChange={handleChange}
              error={touched.description && errors.description}
            />
            <Input
              id="imageLink"
              label="Link hình ảnh mẫu"
              onChange={handleChange}
              isTextArea={true}
              isRequired={false}
              error={touched.imageLink && errors.imageLink}
            />
            <S.HeaderSection>Thông tin liên hệ</S.HeaderSection>
            <S.Row>
              <Input id="userName" label="Họ tên" onChange={handleChange} error={touched.userName && errors.userName} />
              <Input
                id="phoneNumber"
                label="Số điện thoại"
                type="tel"
                onChange={handleChange}
                error={touched.phoneNumber && errors.phoneNumber}
              />
            </S.Row>
            <S.Row>
              <Input
                id="email"
                label="Email"
                type="email"
                onChange={handleChange}
                error={touched.email && errors.email}
              />
              <Input
                id="facebook"
                label="Facebook"
                onChange={handleChange}
                isRequired={false}
                error={touched.facebook && errors.facebook}
              />
            </S.Row>
          </S.FormContent>
        </S.Content>
      </S.Container>
      <S.ButtonSubmit type="submit" disabled={isSubmitting}>
        Nhận báo giá trong 24h {isSubmitting ? '...' : ''}
      </S.ButtonSubmit>
    </S.Form>
  );
};

export default BookForm;
