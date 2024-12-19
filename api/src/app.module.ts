import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import configuration from "./config/env.config";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration],
		}),
		EventEmitterModule.forRoot(),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
