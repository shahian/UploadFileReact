import * as Yup from "yup";

export const loginSchema = function (values) {
  return Yup.object().shape({
    username: Yup.string().required("نام کاربری را وارد نمایید"),
    password: Yup.string().required(" گذرواژه را وارد نمایید"),
  });
};

export const portfoyChangeSchema = function (values) {
  return Yup.object().shape({
    description: Yup.string().required(" شرح را وارد نمایید"),
    remainingInBeginningOfPeriod: Yup.string().required(
      " مانده را وارد نمایید"
    ),
    shoppingDuringThePeriod: Yup.string().required(" مبلغ خرید را وارد نمایید"),
    salesDuringThePeriod: Yup.string().required(" مبلغ فروش را وارد نمایید"),
  });
};

export const exchangePortfoySchema = function (values) {
  return Yup.object().shape({
    costPerShare: Yup.string().required(" ارزش سهم را وارد نمایید"),
    dailyValuePerShare: Yup.string().required(" ارزش روز سهم را وارد نمایید"),
    number: Yup.string().required("تعداد را وارد نمایید"),
  });
};

export const projectProgressSchema = function (values) {
  return Yup.object().shape({
    real: Yup.number()
      .required("درصد را وارد نمایید")
      .min(0)
      .typeError("لطفا عدد وارد کنید")
      .max(100, "درصد باید بین 0 تا 100 باشد"),
    program: Yup.number()
      .required("درصد را وارد نمایید")
      .min(0)
      .typeError("لطفا عدد وارد کنید")
      .max(100, "درصد باید بین 0 تا 100 باشد"),
  });
};

export const companySchema = function (values) {
  return Yup.object().shape({
    name: Yup.string().required("نام شرکت را وارد نمایید"),
    address: Yup.string().required("آدرس شرکت را وارد نمایید"),
    description: Yup.string().required("توضیحات  را وارد نمایید"),
  });
};

export const legalCaseSchema = function (values) {
  return Yup.object().shape({
    topic: Yup.string().required("عنوان را وارد نمایید"),
    price: Yup.string().required("مبلغ را وارد نمایید"),
    code: Yup.string().required("کد پرونده را وارد نمایید"),
    description: Yup.string().required("  توضیحات را وارد نمایید"),
  });
};

export const baseValueSchema = function (values) {
  return Yup.object().shape({
    name: Yup.string().required("عنوان را وارد نمایید"),
    engName: Yup.string().required("عنوان انگلیسی را وارد نمایید"),
    priority: Yup.number()
      .typeError("لطفا عدد وارد کنید")
      .required(" اولویت را وارد نمایید"),
  });
};

export const baseValueTypeSchema = function (values) {
  return Yup.object().shape({
    typeName: Yup.string().required("عنوان را وارد نمایید"),
    typeEngName: Yup.string().required("عنوان انگلیسی را وارد نمایید"),
  });
};

export const financialStatementHeadingSchema = function (values) {
  return Yup.object().shape({
    name: Yup.string().required("عنوان را وارد نمایید"),
    priority:
      values === null
        ? Yup.number("لطفا عدد وارد کنید")
            .min(1, "اولویت باید 1 یا بیشتر باشد")
            .typeError("لطفا عدد وارد کنید")
            .required("اولویت را وارد نمایید")
        : Yup.string().notRequired(),
  });
};

export const specializedOperationHeadingSchema = function (values) {
  return Yup.object().shape({
    name: Yup.string().required("عنوان را وارد نمایید"),
    engName: Yup.string().required("عنوان انگلیسی را وارد نمایید"),
  });
};

export const projectSchema = function (values) {
  return Yup.object().shape({
    topic: Yup.string().required("عنوان را وارد نمایید"),
  });
};

export const financialStatementSchema = Yup.object({
  financialStatementHeadingViewDTOS: Yup.array().of(
    Yup.object().shape({
      mablagheAmalkard: Yup.string().nullable().required("مبلغ را وارد نمایید"),
      mablagheBoudge: Yup.string().nullable().required("مبلغ را وارد نمایید"),
    })
  ),
});

export const specializedOperationSchema = function (values) {
  return Yup.object().shape({
    value: Yup.string().required("مبلغ را وارد نمایید"),
    mablagheBoudge: Yup.string().required("مبلغ را وارد نمایید"),
  });
};

export const importantContractSchema = function (values) {
  return Yup.object().shape({
    topic: Yup.string().required("عنوان را وارد نمایید"),
    contractingParty: Yup.string().required("نام طرف قرارداد را وارد نمایید"),
    contractNumber: Yup.number()
      .typeError("لطفا عدد وارد کنید")
      .required("شماره قرارداد را وارد نمایید"),
    totalPrice: Yup.string().required("مبلغ کل را وارد نمایید"),
    amountPaidReceived: Yup.string().required("مبلغ را وارد نمایید"),
    licenseNumber: Yup.number()
      .typeError("لطفا عدد وارد کنید")
      .required("شماره مجوز را وارد نمایید"),
  });
};
