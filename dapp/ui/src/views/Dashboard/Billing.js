/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// Chakra imports
import { Box, Button, Flex, Grid, Icon, Spacer, Text } from "@chakra-ui/react";

// Images
import BackgroundCard1 from "assets/img/billing-background-card.png";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import GradientBorder from "components/GradientBorder/GradientBorder";
import IconBox from "components/Icons/IconBox";
import BillingRow from "components/Tables/BillingRow";
import InvoicesRow from "components/Tables/InvoicesRow";
import TransactionRow from "components/Tables/TransactionRow";

// Icons
import { FaPencilAlt, FaRegCalendarAlt } from "react-icons/fa";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { RiMastercardFill } from "react-icons/ri";
import {
  BillIcon,
  GraphIcon,
  MastercardIcon,
  VisaIcon,
} from "components/Icons/Icons";

// Data
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "variables/general";

function Billing() {

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }} mx='auto'>
      <Grid templateColumns={{ sm: "1fr", lg: "60% 38%" }}>
        <Box>
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
            }}
            gap='26px'>
              {/* Mastercard */}
              <Card>
              <Flex direction='column'>
                <Flex
                  justify='space-between'
                  p='22px'
                  mb='18px'
                  bg='linear-gradient(127.09deg, rgba(34, 41, 78, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'
                  borderRadius='18px'>
                  <Flex direction='column'>
                    <Text color='#E9EDF7' fontSize='12px'>
                      Earnings To Date
                    </Text>
                    <Text color='#fff' fontWeight='bold' fontSize='34px'>
                      $25,215
                    </Text>
                  </Flex>
                  <Flex direction='column'>

                  </Flex>
                </Flex>
                <Text fontSize='10px' color='gray.400' mb='8px'>
                  NEWEST
                </Text>
                <Flex justify='space-between' align='center'>
                  <Flex align='center'>
                    <IconBox
                      bg='#22234B'
                      borderRadius='30px'
                      w='42px'
                      h='42px'
                      me='10px'>
                      <BillIcon w='22px' h='22px' />
                    </IconBox>
                    <Flex direction='column'>
                      <Text color='#fff' fontSize='sm' mb='2px'>
                        Bill & Taxes
                      </Text>
                      <Text color='gray.400' fontSize='sm'>
                        Today, 16:36
                      </Text>
                    </Flex>
                  </Flex>
                  <Text color='#fff' fontSize='sm' fontWeight='bold'>
                    -$154.50
                  </Text>
                </Flex>
              </Flex>
            </Card>
            {/* Credit Balance */}
            <Card>
              <Flex direction='column'>
                <Flex
                  justify='space-between'
                  p='22px'
                  mb='18px'
                  bg='linear-gradient(127.09deg, rgba(34, 41, 78, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'
                  borderRadius='18px'>
                  <Flex direction='column'>
                    <Text color='#E9EDF7' fontSize='12px'>
                      Investment Balance
                    </Text>
                    <Text color='#fff' fontWeight='bold' fontSize='34px'>
                      $2,215,567
                    </Text>
                  </Flex>
                  <Flex direction='column'>

                  </Flex>
                </Flex>
                <Text fontSize='10px' color='gray.400' mb='8px'>
                  NEWEST
                </Text>
                <Flex justify='space-between' align='center'>
                  <Flex align='center'>
                    <IconBox
                      bg='#22234B'
                      borderRadius='30px'
                      w='42px'
                      h='42px'
                      me='10px'>
                      <BillIcon w='22px' h='22px' />
                    </IconBox>
                    <Flex direction='column'>
                      <Text color='#fff' fontSize='sm' mb='2px'>
                        Next Exit
                      </Text>
                      <Text color='gray.400' fontSize='sm'>
                        Today, 16:36
                      </Text>
                    </Flex>
                  </Flex>
                  <Text color='#fff' fontSize='sm' fontWeight='bold'>
                    Earnings : $15,045.50 
                  </Text>
                  <Text color='#fff' fontSize='sm' fontWeight='bold'>
                    Investment : $1,096,898 
                  </Text>
                </Flex>
              </Flex>
            </Card>
          </Grid>
          {/* Payment Method */}
          <Card p='16px' mt='24px'>
            <CardHeader>
              <Flex
                justify='space-between'
                align='center'
                minHeight='60px'
                w='100%'>
                <Text fontSize='lg' color='#fff' fontWeight='bold'>
                  Payment Method
                </Text>
                <Button maxW='135px' fontSize='10px' variant='brand'>
                  ADD A NEW CARD
                </Button>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex
                direction={{ sm: "column", md: "row" }}
                align='center'
                w='100%'
                justify='center'
                py='1rem'>
                <GradientBorder
                  mb={{ sm: "24px", md: "0px" }}
                  me={{ sm: "0px", md: "24px" }}
                  w='100%'
                  borderRadius='20px'>
                  <Flex
                    p='22px'
                    bg='rgb(31, 35, 89)'
                    border='transparent'
                    borderRadius='20px'
                    align='center'
                    w='100%'>
                    <IconBox me='10px' w='25px' h='22px'>
                      <MastercardIcon w='100%' h='100%' />
                    </IconBox>
                    <Text color='#fff' fontSize='sm'>
                      7812 2139 0823 XXXX
                    </Text>
                    <Spacer />
                    <Button
                      p='0px'
                      bg='transparent'
                      w='16px'
                      h='16px'
                      variant='no-hover'>
                      <Icon as={FaPencilAlt} color='#fff' w='12px' h='12px' />
                    </Button>
                  </Flex>
                </GradientBorder>
              </Flex>
            </CardBody>
          </Card>
          <Card p='16px' mt='24px'>
            <CardHeader>
              <Flex
                justify='space-between'
                align='center'
                minHeight='60px'
                w='100%'>
                <Text fontSize='lg' color='#fff' fontWeight='bold'>
                  Payment Method
                </Text>
                <Button maxW='135px' fontSize='10px' variant='brand'>
                  ADD A NEW CARD
                </Button>
              </Flex>
            </CardHeader>
            <CardBody>
                <GradientBorder w='100%' borderRadius='20px'>
                  <Flex
                    p='22px'
                    bg='rgb(31, 35, 89)'
                    w='100%'
                    borderRadius='20px'
                    border='transparent'
                    align='center'>
                    <IconBox me='10px' w='25px' h='25px'>
                      <VisaIcon w='100%' h='100%' color='#fff' />
                    </IconBox>
                    <Text color='#fff' fontSize='sm'>
                      7812 2139 0823 XXXX
                    </Text>
                    <Spacer />
                    <Button
                      p='0px'
                      bg='transparent'
                      w='16px'
                      h='16px'
                      variant='no-hover'>
                      <Icon as={FaPencilAlt} color='#fff' w='12px' h='12px' />
                    </Button>
                  </Flex>
                </GradientBorder>
            </CardBody>
          </Card>
        </Box>
        {/* Invoices List */}
        <Card
          p='22px'
          my={{ sm: "24px", lg: "0px" }}
          ms={{ sm: "0px", lg: "24px" }}>
          <CardHeader>
            <Flex
              justify='space-between'
              align='center'
              mb='1rem'
              w='100%'
              mb='28px'>
              <Text fontSize='lg' color='#fff' fontWeight='bold'>
                Invoices
              </Text>
              <Button
                variant='brand'
                fontSize='10px'
                fontWeight='bold'
                p='6px 32px'>
                VIEW ALL
              </Button>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction='column' w='100%'>
              {invoicesData.map((row) => {
                return (
                  <InvoicesRow
                    date={row.date}
                    code={row.code}
                    price={row.price}
                    logo={row.logo}
                    format={row.format}
                  />
                );
              })}
            </Flex>
          </CardBody>
        </Card>
      </Grid>
   
    </Flex>
  );
}

export default Billing;
