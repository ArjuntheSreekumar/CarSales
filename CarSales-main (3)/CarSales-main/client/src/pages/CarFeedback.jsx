import React, { useState } from 'react';
import './CarFeedback.css'; // Import the CSS file

const CarFeedback = () => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const feedback = {
            name: name || 'Anonymous',
            review: review || 'No review provided',
            rating: rating !== null ? rating : 'No rating provided',
        };
        console.log('Feedback submitted:', feedback);
        
        // Reset form fields
        setName('');
        setReview('');
        setRating(null);
    };

    return (
        <div className="feedback-container">
            <h2>Car Feedback</h2>
            <form onSubmit={handleSubmit} className="feedback-form">
                <div className="form-group">
                    <label htmlFor="name">Name (optional):</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name (optional)"
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="review">Review:</label>
                    <textarea
                        id="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="Write your review here..."
                        required
                        className="form-textarea"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating (1-5):</label>
                    <select
                        id="rating"
                        value={rating || ''}
                        onChange={(e) => setRating(e.target.value ? Number(e.target.value) : null)}
                        className="form-select"
                    >
                        <option value="">Select rating (optional)</option>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="form-button">Submit Feedback</button>
            </form>
        </div>
    );
};

export default CarFeedback;
