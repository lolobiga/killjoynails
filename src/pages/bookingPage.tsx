import {InlineWidget} from "react-calendly";

export default function BookingPage() {
    return (
        <div style={{
            height: "100vh",
            overflow: "hidden"
        }}>
            <InlineWidget
                url="https://calendly.com/lolobiga"
                styles={{
                    height: "100%",
                    margin: "0 !important",
                    padding: "0 !important"
                }}
            />
        </div>
    );
}