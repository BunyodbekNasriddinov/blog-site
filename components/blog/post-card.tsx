import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ComponentPropsWithRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";

function PostCard(
  { thumbnail }: { thumbnail: string },
  props: ComponentPropsWithRef<typeof Card>
) {
  return (
    <Card {...props}>
      <CardHeader className={cn("flex flex-col gap-2")}>
        {thumbnail ? (
          <Image
            className="object-cover rounded-md w-full"
            src={"/no-thumbnail.jpg"}
            width={200}
            height={200}
            alt="Thumbnail image"
          />
        ) : (
          <Icons.noThumbnail />
        )}

        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          doloremque dolorum, earum eos, expedita facere fugiat, facilis fugit
          harum iusto libero maiores molestiae nobis, nobis odit quaerat quasi
          quidem quo repellendus repudiandae soluta sunt tempore ullam unde
          voluptatum.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild>
          <Link href="#">Read more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PostCard;
