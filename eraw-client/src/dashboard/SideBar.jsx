import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example" className='text-orange3'>
        <Sidebar.Logo href="../" img="/bird-icon.svg" imgAlt="eRaw logo">
        eRaw
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className='text-coltext'>
            Admin Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className='text-coltext'>
            Upload Product
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className='text-coltext'>
            Manage Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight} className='text-coltext'>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable} className='text-coltext'>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar