import { ApiProperty } from '@nestjs/swagger';

export class CreateMenuDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, default: false })
  parentId?: string;

  @ApiProperty({ required: false, default: false })
  parentName: string;

  @ApiProperty({ required: false })
  depth?: number;
}
