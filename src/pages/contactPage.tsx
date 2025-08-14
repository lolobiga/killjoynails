export default function ContactPage() {
    return (
        <div className="contact-page">
            <h2 className="contact-title">Get in touch</h2>
            <form className="contact-form">
                <label htmlFor="name" className="contact-label">Email / Instagram / Phone nr.:</label>
                <input type="text" id="name" name="name" className="contact-input" required />

                <label htmlFor="message" className="contact-label">Message:</label>
                <textarea id="message" name="message" className="contact-textarea" spellCheck={false} rows={20} required></textarea>

                <button type="submit" className="contact-button">Send</button>
            </form>
        </div>
    );
}