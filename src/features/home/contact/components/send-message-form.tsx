export default function SendMessageForm() {
  return (
    <div className="w-full p-5 space-y-5 bg-background rounded-xl border border-border-card">
      <Input required label="Name" placeholder="John Smith" />
      <Input required label="Email" placeholder="johnsmith@gmail.com" />
      <Input label="Phone Number" placeholder="+44789 123456" />
      <Textarea
        required
        label="Message"
        placeholder="Hello, I'd like to enquire about..."
      />

      {/* <Button>Send Message</Button> */}
    </div>
  );
}

interface InputProps extends React.ComponentProps<"input"> {
  label: string;
}
function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="font-medium">
        {label}
        {props.required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...props}
        className="rounded-md bg-light-gray border border-border h-12 px-3 placeholder:text-foreground/20"
      />
    </div>
  );
}

interface TextareaProps extends React.ComponentProps<"textarea"> {
  label: string;
}
function Textarea({ label, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col">
      <label className="font-medium">
        {label}
        {props.required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        {...props}
        className="rounded-md bg-light-gray border border-border min-h-[150px] py-3.5 px-3 placeholder:text-foreground/20"
      />
    </div>
  );
}

function Button(props: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className="inline-flex items-center justify-center py-[11px] px-55 bg-foreground/75 rounded-md text-background font-medium"
    >
      {props.children}
    </button>
  );
}
