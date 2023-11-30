import { Text, TextInput, View, TouchableOpacity } from "react-native";
import React from "react";
import { STYLES } from "../assets/constants";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormSchema } from "../schemas";
import { ErrorText } from "../assets/components";

const Register = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(signUpFormSchema) });

  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <View style={STYLES.sContainer}>
      <Text style={[STYLES.bold, { marginBottom: 30 }]}>Let's sign up!</Text>

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[
              STYLES.loginInput,
              { borderTopLeftRadius: 20, borderTopRightRadius: 20 },
            ]}
            placeholder="Name"
            textAlign="left"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullName"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={STYLES.loginInput}
            placeholder="E-mail"
            textAlign="left"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[
              STYLES.loginInput,
              { borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
            ]}
            placeholder="Password"
            textAlign="left"
            secureTextEntry={true}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />

      <TouchableOpacity
        style={[STYLES.loginButton, { margin: 10 }]}
        onPress={handleSubmit(handleSignUp)}
      >
        <Text style={[STYLES.bold]}>Sign in</Text>
      </TouchableOpacity>

      {!isValid && (
        <View style={STYLES.loginErrorBox}>
          {!!errors.fullName && (
            <ErrorText>{errors.fullName.message}</ErrorText>
          )}
          {!!errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          {!!errors.password && (
            <ErrorText>{errors.password.message}</ErrorText>
          )}
        </View>
      )}
    </View>
  );
};

export default Register;
