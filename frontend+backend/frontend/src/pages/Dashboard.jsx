import StatsCard from "../components/StatsCard";
import { useState, useEffect } from "react";

import { getposts } from "../services/blogApi";
import { getAllCategory } from "../services/categoryApi";
import { getComment } from "../services/commentApi";
import { getSubscriber } from "../services/subscriberApi";
function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [comments, setComments] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getposts();
        setPosts(data);
      } catch (err) {
        console.log("Error fetching posts:", err);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoriesData = await getAllCategory();
        setCategories(categoriesData);
        console.log(categoriesData);
      } catch (err) {
        console.log("Error fetching posts:", err);
      }
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    const getcomment = async () => {
      try {
        const data = await getComment();
        setComments(data);
      } catch (err) {
        console.log("Error fetching posts:", err);
      }
    };
    getcomment();
  }, []);

  useEffect(() => {
    const getsubscriber = async () => {
      try {
        const data = await getSubscriber();
        setSubscribers(data);
      } catch (err) {
        console.log("Error fetching posts:", err);
      }
    };
    getsubscriber();
  }, []);

  console.log(posts);
  console.log(categories);
  console.log(comments);
  console.log(subscribers);

  return (
    <main className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Dashboard Overview</h1>

          <p className="text-gray-500 mt-2">
            Manage your blog content and analytics.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="bg-slate-900 text-white px-5 py-3 rounded-lg">
            New User
          </button>

          <button className="bg-white border px-5 py-3 rounded-lg">
            New Post
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 mb-8">
        <StatsCard
          title="Total Posts"
          value={posts.length}
          bgColor="bg-blue-50"
        />
        <StatsCard
          title="Comments"
          value={comments.length}
          bgColor="bg-blue-50"
        />

        <StatsCard
          title="Categories"
          value={categories.length}
          bgColor="bg-blue-50"
        />

        <StatsCard
          title="Subscribers"
          value={subscribers.length}
          bgColor="bg-blue-50"
        />
      </div>

      <div className="grid grid-cols-4 gap-5 mb-8">
        <StatsCard title="Active Ads" value="0" bgColor="bg-blue-50" />

        <StatsCard title="Impressions" value="0" bgColor="bg-green-50" />

        <StatsCard title="Total Clicks" value="0" bgColor="bg-purple-50" />

        <StatsCard title="Unread Inbox" value="0" bgColor="bg-orange-50" />
      </div>
    </main>
  );
}

export default Dashboard;
