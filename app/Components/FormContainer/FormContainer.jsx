'use client';
import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
} from '@nextui-org/react';
import { Login, Register } from '../index';

const FormContainer = () => {
  const [selected, setSelected] = useState('login');

  return (
    <>
      <div className="mt-10">
        <div className="grid place-content-center  w-full">
          <Card className="max-w-full w-[340px] h-[450px]">
            <CardBody className="overflow-hidden">
              <Tabs
                fullWidth
                size="md"
                aria-label="Tabs form"
                selectedKey={selected}
                onSelectionChange={setSelected}
              >
                <Tab key="login" title="Login">
                  <Login onPress={() => setSelected('sign-up')} />
                </Tab>
                <Tab key="sign-up" title="Sign up">
                  <Register onPress={() => setSelected('login')} />
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FormContainer;
