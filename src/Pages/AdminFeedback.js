import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Using axios for HTTP requests

const AdminFeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [responseText, setResponseText] = useState('');
  const [selectedFeedbackId, setSelectedFeedbackId] = useState(null);

  // Fetch feedback on component mount
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('/api/feedback');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  const handleResponseChange = (event) => {
    setResponseText(event.target.value);
  };

  const submitResponse = async (feedbackId) => {
    try {
      await axios.post(`/api/feedback/${feedbackId}/respond`, { response: responseText });
      // Update the feedback list with the new response
      const updatedFeedbacks = feedbacks.map(feedback => {
        if (feedback.id === feedbackId) {
          return { ...feedback, response: responseText, respondedAt: new Date().toISOString() };
        }
        return feedback;
      });

      setFeedbacks(updatedFeedbacks);
      // Reset selected feedback and response text
      setSelectedFeedbackId(null);
      setResponseText('');
    } catch (error) {
      console.error('Error submitting response:', error);
    }
  };

  return (
    <div className="w-full h-auto bg-gray-200 p-9">
      <h2 className="text-4xl font-semibold">Customer Feedback</h2>
      {feedbacks.map((feedback) => (
        <div key={feedback.FeedbackID} style={{ marginBottom: '20px' }}>
          <p>Rating: {feedback.Rating} / 5</p>
          <p>Comment: {feedback.Comment}</p>
          {feedback.Response ? (
            <p>Response: {feedback.Response}</p>
          ) : (
            selectedFeedbackId === feedback.FeedbackID ? (
              <div>
                <textarea value={responseText} onChange={handleResponseChange}></textarea>
                <button onClick={() => submitResponse(feedback.FeedbackID)}>Submit Response</button>
              </div>
            ) : (
              <button onClick={() => { setSelectedFeedbackId(feedback.FeedbackID); setResponseText(''); }}>Respond</button>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminFeedbackPage;
