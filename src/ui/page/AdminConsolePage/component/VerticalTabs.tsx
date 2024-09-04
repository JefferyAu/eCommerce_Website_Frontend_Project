// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import ProductTable from "./ProductTable.tsx";
// import {ProductDetailDto, ProductDto} from "../../../../data/product/ProductDto.type.ts";
// import AddProductTable from "./AddProductTable.tsx";
// import * as ProductDtoApi from "../../../../api/ProductDtoApi.ts";
//
//
// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }
//
// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;
//
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }
//
// function a11yProps(index: number) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }
//
// type Props = {
//   getProductDtoList: ProductDto[]
//   addProductDto:ProductDetailDto
//   handleAddProductDtoChange:(addProductDto:ProductDetailDto)=>void
//   deleteProductDtoDetail:(pid:number)=>void
//   handleRefreshGetAllApi:(getProductDtoList:ProductDto[])=>void
// }
//
// export default function VerticalTabs({
//                                        getProductDtoList,
//                                        addProductDto,
//                                        handleAddProductDtoChange,
//                                        deleteProductDtoDetail,
//                                        handleRefreshGetAllApi
//                                        }:Props) {
//
//   const [value, setValue] = React.useState(0);
//
//   const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };
//
//   const handleRefreshTab = async () =>{
//     const responseData =  await ProductDtoApi.getProductDto()
//     handleRefreshGetAllApi(responseData);
//   }
//
//
//
//   return (
//     <Box
//       sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 450 }}
//     >
//       <Tabs
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         sx={{
//           borderRight: 1,
//           borderColor: 'divider'
//         }}
//         style={{
//           width: "200px"
//         }}
//       >
//         <Tab label="All Product" onClick={handleRefreshTab} {...a11yProps(0)} />
//         <Tab label="Add Product" {...a11yProps(1)} />
//         <Tab label="Report" {...a11yProps(2)} />
//         {/*<Tab label="Item Four" {...a11yProps(3)} />*/}
//         {/*<Tab label="Item Five" {...a11yProps(4)} />*/}
//         {/*<Tab label="Item Six" {...a11yProps(5)} />*/}
//         {/*<Tab label="Item Seven" {...a11yProps(6)} />*/}
//       </Tabs>
//       <TabPanel value={value} index={0} >
//         {
//           getProductDtoList &&
//             <ProductTable
//                 getProductDtoList={getProductDtoList}
//                 deleteProductDtoDetail={deleteProductDtoDetail}
//             />
//         }
//
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <AddProductTable
//           addProductDto={addProductDto}
//           handleAddProductDtoChange={handleAddProductDtoChange}
//         />
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//       {/*<TabPanel value={value} index={3}>*/}
//       {/*  Item Four*/}
//       {/*</TabPanel>*/}
//       {/*<TabPanel value={value} index={4}>*/}
//       {/*  Item Five*/}
//       {/*</TabPanel>*/}
//       {/*<TabPanel value={value} index={5}>*/}
//       {/*  Item Six*/}
//       {/*</TabPanel>*/}
//       {/*<TabPanel value={value} index={6}>*/}
//       {/*  Item Seven*/}
//       {/*</TabPanel>*/}
//     </Box>
//   );
// }
