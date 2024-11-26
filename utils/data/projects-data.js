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
    },
    {
        id: 4,
        name: 'Ranking Of Disaster Related Tweets using ML & LDA',
        description: 'Twitter live stream data is retrieved in the form of tweets using the python package snscrape, then it is stored in an excel format. The types of preprocessing techniques include removal of any urls, emails, removing the retweets to reduce redundancy in tweets, removing the html tags or any mentions in the tweet, and also correcting the spelling mistakes if there are any, in the tweet. The preprocessed dataset is trained using three different machine learning algorithms for classifying the tweets into disaster related and not related. The result of classification algorithm whose testing accuracy is high is sent for sentiment analysis to know whether the tweets are negative, positive or neutral. Finally, the tweets are given ranking using Count Vectorizer and Latent Dirichlet Allocation and the ranked tweets are displayed on a webpage.',
        tools: ['Python', 'Machine Learning', 'Streamlit', 'Data Analysis', 'Sentiment Analysis'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel
    },
    // {
    //     id: 5,
    //     name: 'Taskify',
    //     description: 'Taskify is a real world task management application built using Next JS. Here, we can create workspaces / organizations, we can create boards (limit to 5 for a free version). Pro version upgrades is also available to create more than 5 boards. It has features to create tasks, update them according to the status, and also other major actions. Each board also has an option to set image for it, these images are randomly generated from the unsplash API.',
    //     tools: ['Next JS', 'React', 'Prisma', 'Docker', 'PostgreSQL'],
    //     role: 'Full Stack Developer',
    //     code: '',
    //     demo: '',
    //     image: travel
    // },
    // {
    //     id: 6,
    //     name: 'Ecommerce Admin SaaS Web Application',
    //     description: 'Twitter live stream data is retrieved in the form of tweets using the python package snscrape, then it is stored in an excel format. The types of preprocessing techniques include removal of any urls, emails, removing the retweets to reduce redundancy in tweets, removing the html tags or any mentions in the tweet, and also correcting the spelling mistakes if there are any, in the tweet. The preprocessed dataset is trained using three different machine learning algorithms for classifying the tweets into disaster related and not related. The result of classification algorithm whose testing accuracy is high is sent for sentiment analysis to know whether the tweets are negative, positive or neutral. Finally, the tweets are given ranking using Count Vectorizer and Latent Dirichlet Allocation and the ranked tweets are displayed on a webpage.',
    //     tools: ['Python', 'Machine Learning', 'Streamlit', 'Data Analysis', 'Sentiment Analysis'],
    //     role: 'Full Stack Developer',
    //     code: '',
    //     demo: '',
    //     image: travel
    // }
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