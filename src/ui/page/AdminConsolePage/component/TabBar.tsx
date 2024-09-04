import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {ProductDetailDto, ProductDto} from "../../../../data/product/ProductDto.type.ts";
import * as ProductDtoApi from "../../../../api/ProductDtoApi.ts";
import ProductTable from "./ProductTable.tsx";
import AddProductTable from "./AddProductTable.tsx";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type Props = {
  getProductDtoList: ProductDto[]
  addProductDto:ProductDetailDto
  handleAddProductDtoChange:(addProductDto:ProductDetailDto)=>void
  deleteProductDtoDetail:(pid:number)=>void
  handleRefreshGetAllApi:(getProductDtoList:ProductDto[])=>void
}

export default function TabBar({
                                    getProductDtoList,
                                    addProductDto,
                                    handleAddProductDtoChange,
                                    deleteProductDtoDetail,
                                    handleRefreshGetAllApi
                                  }:Props) {

  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleRefreshTab = async () =>{
    const responseData =  await ProductDtoApi.getProductDto()
    handleRefreshGetAllApi(responseData);
  }


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All Product" onClick={handleRefreshTab} {...a11yProps(0)} />
          <Tab label="Add Product" {...a11yProps(1)} />
          <Tab label="Report" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {
          getProductDtoList &&
            <ProductTable
                getProductDtoList={getProductDtoList}
                deleteProductDtoDetail={deleteProductDtoDetail}
            />
        }
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AddProductTable
          addProductDto={addProductDto}
          handleAddProductDtoChange={handleAddProductDtoChange}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}