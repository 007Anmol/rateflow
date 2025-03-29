
import React from "react";
import Layout from "@/components/layout/Layout";
import ReviewForm from "@/components/reviews/ReviewForm";

const WriteReview = () => {
  return (
    <Layout showBackButton pageTitle="Write a Review">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-600 mb-6">
            Your honest review helps others make better decisions. Please be detailed and specific about your experience.
          </p>
          
          <ReviewForm />
        </div>
      </div>
    </Layout>
  );
};

export default WriteReview;
