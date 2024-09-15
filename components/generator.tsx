"use client";

import { z } from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  type: z.string().min(1, { message: "Please select a type." }),
  code: z.string().regex(/^tt\d{7,9}$/, {
    message:
      "Invalid IMDb code. It should start with 'tt' followed by 7 to 9 digits.",
  }),
});

export default function Generator() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "",
      code: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const url = `https://vidsrc.in/embed/${values.type}?imdb=${values.code}`;

    router.push(url);
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <Label>
        Select a show type, paste an
        <Button variant={"link"} className="px-0">
          <Link
            href="https://www.imdb.com"
            target="_blank"
            className="underline"
          >
            &nbsp;IMDB&nbsp;
          </Link>{" "}
        </Button>
        code and you&apos;re good to go
      </Label>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-7 gap-2"
        >
          <div className="grid grid-cols-2 gap-2 col-span-6">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Movie/Series" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="movie">Movie</SelectItem>
                      <SelectItem value="tv">Series</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="IMDB code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Go</Button>
        </form>
      </Form>
    </div>
  );
}
