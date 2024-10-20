import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'ToDo App',
        description: "Built a ToDo Web Application, where the user can add his tasks, create subtasks, mark their priority, and can keep track of his tasks completion.",
        tools: ['ADO.Net', 'M S SQL', 'Angular', 'Angular Material'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Cart Master - An E-Commerce Website',
        description: `Cart Master features two user types: Customers and Admins. Customers can register and log in securely, browse and search for products, filter by category, and manage their cart by adding, viewing, and updating items. They can proceed to checkout with their chosen payment methods, track their orders, and manage cancellations or returns. Additionally, customers can update their profiles, save items to a wishlist, and log out securely. Admins can manage products and categories by adding, updating, or removing them, view user details and order histories, update order statuses, and handle returns. They also have access to a dashboard that provides insights into product metrics, user growth, and sales data, along with the ability to export data to Excel for reporting. This API facilitates seamless management for both customers and administrators on the Cart Master platform.`,
        tools: ['ADO.Net', 'M S SQL', 'Angular', 'Angular Material', 'ChartJS', 'ExcelJS', 'ReCaptcha'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Employee Management System',
        description: 'The Employee Management System supports three roles: Employee, Manager, and HR. Employees can view team and project details, as well as apply for and check their leaves. Managers can approve or reject leave requests and assign employees to projects or teams. HR can add, update, or delete employee records (using soft delete) and assign or de-assign assets. Employees can view their asset details and request new assets, while HR manages asset creation, updates, and deletions.',
        tools: ['React', 'React Material UI', 'TypeScript', 'ADO.NET', 'PostgreSQL'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },